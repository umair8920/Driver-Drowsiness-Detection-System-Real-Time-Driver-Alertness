import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';

const RecordScreen = () => {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      try {
        const data = await camera.recordAsync({
          maxDuration: 10,
        });
        setRecord(data.uri);
        console.log(data.uri);
      } catch (error) {
        console.error("Failed to record video:", error);
      }
    }
  };

  const stopVideo = async () => {
    if (camera) {
      camera.stopRecording();
    }
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'4:3'}
        />
      </View>
      {record && (
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: record,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      )}
      <View style={styles.buttons}>
        {record && (
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        )}
        <Button
          title="Flip Camera"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />
        <Button title="Take Video" onPress={takeVideo} />
        <Button title="Stop Video" onPress={stopVideo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  video: {
    flex: 2,
    width: '100%',
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
});

export default RecordScreen;
