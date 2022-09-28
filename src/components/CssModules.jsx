import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.title}>CSS CssModulesです</p>
        <button className={classes.button}>ボタン</button>
      </div>
    </div>
  );
};
