import Lottie from "react-lottie"; // react-lottie 임포트
import loadingLottie from "../assets/lottie/loading.json";

export default function LoadingScreen() {
  const defaultOptions = {
    loop: true, // 반복 여부
    autoplay: true, // 자동 재생 여부
    animationData: loadingLottie, // 애니메이션 데이터
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // 애니메이션 비율 설정
    },
  };
  return (
    <div className="flex justify-center items-center   ">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}
