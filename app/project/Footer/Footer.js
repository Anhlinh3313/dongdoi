import React from "react";
import Styles from "../../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles["footer"]}>
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-inner"]}>
          <div className={Styles["menu"]}>
            <ul className={Styles["footer-menu"]}>
              <li className={Styles["footer-menu-item"]}>Trang chủ</li>
              <li className={Styles["footer-menu-item"]}>Video</li>
              <li className={Styles["footer-menu-item"]}>Podcasts</li>
              <li className={Styles["footer-menu-item"]}>Ảnh</li>
              <li className={Styles["footer-menu-item"]}>Infographics</li>
              <li className={Styles["line"]}></li>
              <li className={Styles["footer-menu-item"]}>Mới nhất</li>
              <li className={Styles["footer-menu-item"]}>Xem nhiều</li>
              <li className={Styles["footer-menu-item"]}>Tin nóng</li>
            </ul>
            <ul className={Styles["footer-menu"]}>
              <li className={Styles["footer-menu-item-new"]}>Thời sự</li>
              <li className={Styles["footer-menu-item-new"]}>Góc nhìn</li>
              <li className={Styles["footer-menu-item-new"]}>Thế giới</li>
              <li className={Styles["footer-menu-item-new"]}>Kinh doanh</li>
              <li className={Styles["footer-menu-item-new"]}>Giải trí</li>
            </ul>
            <ul className={Styles["footer-menu"]}>
              <li className={Styles["footer-menu-item-new"]}>Thể thao</li>
              <li className={Styles["footer-menu-item-new"]}>Pháp luật</li>
              <li className={Styles["footer-menu-item-new"]}>Giáo dục</li>
              <li className={Styles["footer-menu-item-new"]}>Sức khỏe</li>
              <li className={Styles["footer-menu-item-new"]}>Đời sống</li>
              <li className={Styles["footer-menu-item-new"]}>Du lịch</li>
            </ul>
            <ul className={Styles["footer-menu-last"]}>
              <li className={Styles["footer-menu-item-new"]}>Khoa học</li>
              <li className={Styles["footer-menu-item-new"]}>Số hóa</li>
              <li className={Styles["footer-menu-item-new"]}>Xe</li>
              <li className={Styles["footer-menu-item-new"]}>Ý kiến</li>
              <li className={Styles["footer-menu-item-new"]}>Tâm sự</li>
              <li className={Styles["footer-menu-item-new"]}>Thư giãn</li>
            </ul>
            <ul className={Styles["footer-menu-first"]}>
              <li className={Styles["footer-menu-item-new"]}>Thể thao</li>
              <li className={Styles["footer-menu-item-new"]}>Pháp luật</li>
              <li className={Styles["footer-menu-item-new"]}>Giáo dục</li>
              <li className={Styles["footer-menu-item-new"]}>Sức khỏe</li>
              <li className={Styles["footer-menu-item-new"]}>Đời sống</li>
              <li className={Styles["footer-menu-item-new"]}>Du lịch</li>
            </ul>
            <div className={Styles["wrap-contact"]}>
                <div className={Styles["contact"]}>
                  <p>Tải ứng dụng</p>
                  <div className={Styles["app"]}>
                      <div className={Styles["app-left"]}>
                        <div className={Styles["app-left-width"]}>
                          <img style={{width:'24px', height:'24px'}} src="https://s.vnecdn.net/thethao/restruct/i/v67/dulieubongda/icons/nha.svg" width={24} height={24}/>
                          <span>Thetha0789</span>
                        </div>
                      </div>
                      <div className={Styles["app-right"]}>
                        <div className={Styles["app-left-width"]}>
                          <img style={{width:'24px', height:'24px'}} src="https://s.vnecdn.net/thethao/restruct/i/v67/dulieubongda/icons/nha.svg" width={24} height={24}/>
                          <span>Thetha0789</span>
                        </div>
                      </div>
                  </div>
                  <p>Liên hệ</p>
                  <div>
                    <div className={Styles["contact-app"]}>
                      <div className={Styles["app-left"]}>
                            <img style={{width:'24px', height:'24px'}} src="https://s.vnecdn.net/thethao/restruct/i/v67/dulieubongda/icons/nha.svg" width={24} height={24}/>
                            <span>Thetha0789</span>
                        </div>
                        <div className={Styles["app-right"]}>
                            <img style={{width:'24px', height:'24px'}} src="https://s.vnecdn.net/thethao/restruct/i/v67/dulieubongda/icons/nha.svg" width={24} height={24}/>
                            <span>Thetha0789</span>
                        </div>
                    </div>
                    <img style={{width:'24px', height:'24px'}} src="https://s.vnecdn.net/thethao/restruct/i/v67/dulieubongda/icons/nha.svg" width={24} height={24}/>
                    <span>Hợp tác bản quyền</span>
                    <ul className={Styles["line-line"]}></ul>
                  </div>
                  <p>Đường dây nóng</p>
                  <div className={Styles["contact-app"]}>
                      <div className={Styles["contact-left"]}>
                        <h4>083.888.0123</h4>
                        <span>(Hà Nội)</span>
                      </div>
                      <div className={Styles["contact-right"]}>
                        <h4>082.233.3555</h4>
                        <span>(TP. Hồ Chí Minh)</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={Styles["copyright"]}>
          <div className={Styles["copyright-first"]}>
            <span>
              Thể thao 789
              <img style={{width:'24px', height:'24px'}} src="http://localhost:3039/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1fdbe033.png&w=256&q=75" width={24} height={24}/>
            </span>
          </div>
          <div className={Styles["right-flexbox"]}>
            <div className={Styles["rrs"]}>
              <p>RSS</p>
            </div>
            <div className={Styles["txt-follow"]}>
              <span>Theo dõi thethao789 trên</span>
            </div>
            <div className={Styles["txt-follow-icon"]}>
              <div className={Styles["txt-follow-icon-item"]}>
                <span>
                  <img style={{width:'21px', height:'21px'}} src="http://localhost:3039/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1fdbe033.png&w=256&q=75" width={21} height={21}/>
                </span>
              </div>
              <div className={Styles["txt-follow-icon-item"]}>
                <span>
                  <img style={{width:'21px', height:'21px'}} src="http://localhost:3039/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1fdbe033.png&w=256&q=75" width={21} height={21}/>
                </span>
              </div>
              <div className={Styles["txt-follow-icon-item"]}>
                <span>
                  <img style={{width:'21px', height:'21px'}} src="http://localhost:3039/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1fdbe033.png&w=256&q=75" width={21} height={21}/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["copyright-footer"]}>
          <p>
            <strong>Báo tiếng Việt nhiều người xem nhất</strong>
            <br/>Thuộc Bộ Khoa học Công nghệ
            <br/>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
          </p>
          <p>
            Tổng biên tập: Phạm Hiếu<br/>
            Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội<br/>
            Điện thoại: 024 7300 8899 - máy lẻ 4500
          </p>
          <p>© 1997-2023. Toàn bộ bản quyền thuộc thethao789</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
