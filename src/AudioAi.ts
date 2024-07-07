// AudioAI.ts
// import { fetchAudioToText } from "./service";

import { fetchAudioToText } from "./service";

function blobToBase64(blob: Blob, callBack: any): any {
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function (e) {
    callBack(e?.target?.result);
  };
}

export default class AudioAI {
  async toText(audio: Blob) {
    const wavUrl = URL.createObjectURL(audio);

    const link = document.createElement("a");
    link.href = wavUrl;
    link.download = "audio.wav";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("杰哥测试---toText：", audio, wavUrl);
    return;
    blobToBase64(audio, async (result: string) => {
      //   const _result = result.replace("data:audio/wave;base64,", "");
      const response = await fetchAudioToText(result, audio.size);
      return response.data;
    });
  }
}
