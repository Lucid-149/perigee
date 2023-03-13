import AppInfo from "../../../../data/content/info";
import Images from "../../../../data/content/Images";

import AnimatedImages from "./utils/AminatedImages";
import Container from "./utils/Container";
import Content from "./utils/Content";
import Logo from "./utils/Logo";

export default function Hero() {
  const call = (action: string) => {
    console.log(action);
  };

 
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Container
        content={
          <div className={` backdrop-blur-sm flex flex-wrap w-full justify-center items-center h-screen relative  $`}>
            <Logo />
            <div className={` absolute top-0 w-full h-full -z-10 `}/>
           
            <Content
              title={AppInfo.name}
              description={AppInfo.description}
              callToAction={call}
            />
            <AnimatedImages images={Images} delay={100} />
          </div>
        }
      />
    </div>
  );
}
