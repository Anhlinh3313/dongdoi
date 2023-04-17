import IconDown from "./IconMenu/IconDown";
import Styles from "./style/Menupc.module.css";

const SeeMore = () => {
  return (
        <div
          className={Styles.menu_bottom_seeMore}
        >
          Xem thêm
          <IconDown />
        </div>
  );
};

export default SeeMore;
