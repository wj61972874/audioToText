// service.ts
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const fetchAudioToText = async (audio: any, size: any) => {
  console.log("结果测试--fetchAudioToText：", audio, size);
  //   return;
  return api.post("http://localhost:3000/api/aigc/audioToText", {
    speech: audio,
    len: size,
  });
};
