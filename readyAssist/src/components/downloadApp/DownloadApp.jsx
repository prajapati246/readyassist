import "./downloadApp.scss";
import downloadApp from "../../assets/download-app.png";
import DownloadAppQr from "../../assets/Download-app-QR.png";
import appStore from "../../assets/appStore.png";
import playstore from "../../assets/playStore.png";

const DownloadApp = () => {
  return (
    <div id="downloadApp">
    <div className="downloadapp_section">
        <div className="mobile_image">
            <img src={downloadApp} alt="downloadApp" />
        </div>
        <div className="downloadapp_text">
            <h3>Download <span>ReadyAssist SuperApp</span></h3>
            <p>Stay just a click away from hassle-free vehicle services. Easily book and track your service requests
                online with our all-in-one app, designed to meet all your automotive needs efficiently. Experience
                seamless assistance whenever you need it and enjoy a smooth, stress-free journey every time!</p>
            <div className="downloadapp_badges">
                <a href="https://play.google.com/store/apps/details?id=com.prod.racustomerapp" target="_blank">
                    <img src={playstore} alt="playstore icon" />
                </a>
                <a href="https://apps.apple.com/in/app/readyassist-superapp/id6449661045" target="_blank">
                    <img src={appStore} alt="appstore icon" />
                </a>
            </div>
            <div className="downloadapp_qr">
                <img src={DownloadAppQr} alt="ReadyAssist QR" />
                <div className="downloadapp_qr_text">
                    <h6>SCAN QR CODE <span>TO <br /> DOWNLOAD</span></h6>
                    <p>Download the readyassist SuperApp & get <br /> up to 10% off on Doorstep bike Gereral service</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DownloadApp