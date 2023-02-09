import ModulesContainer from "../ModulesContainer";
import css from "../../styles/modulescontainer.module.css";

const Modules = () => {
  return (
    <div className={css["navbar"]}>
      <p className={css["title"]}>CSS Modules</p>
      <ModulesContainer />
    </div>
  );
};

export default Modules;
