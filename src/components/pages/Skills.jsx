import { BiBorderAll, BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import Cards from "../common/Cards";
import SkillCircles from "../common/SkillCircles";
import Title from "../common/Title";

const Skills = () => {
  return (
    <div id="skills" className="h-fit bg-my-lightgray w-screen block pb-10">
      <div className="w-full h-[100px] grid place-content-center">
        <Title title={"Skills"} />
      </div>

      <div className="w-full h-fit mt-6">
        <div className=" block ml-[16.5%] mr-[17%]">
          <div className="flex h-fit justify-start items-center">
            <Cards
              skillsCard={true}
              title={"Technologies"}
              text="Javascript, Html5 , node js, react js, Java, postgreSQl,"
            />
            <SkillCircles left={true} icon={<BiCodeAlt size={40} />} />
          </div>

          <div className="flex justify-end mt-[-80px] items-center">
            <SkillCircles right={true} icon={<FiFigma size={35} />} />
            <Cards
              skillsCard={true}
              title={"Designs"}
              text="Figma, Miro, Adobe, Photoshop"
            />
          </div>

          <div className="flex h-fit mt-[-80px] items-center">
            <Cards
              skillsCard={true}
              title={"Control version"}
              text="Git, Github, Heroku"
            />
            <SkillCircles left={true} icon={<BiGitBranch size={35} />} />
          </div>

          <div className="flex h-fit justify-end mt-[-80px] items-center">
            <SkillCircles right={true} icon={<BiBorderAll size={35} />} />
            <Cards skillsCard={true}  title={"project management"}
              text="Jira, Agile methodology, Slack," />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
