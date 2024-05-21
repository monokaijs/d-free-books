import {ConfigProvider} from "antd";
import LandingPageHeader from "@/app/home/LandingPageHeader";
import LandingPageFooter from "@/app/home/LandingPageFooter";

export default async function DashboardLayout({children}: any) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4A6F73',
          colorText: '#717171',
          colorLink: '#006D75',
          colorTextHeading: "#717171",
        },
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0
          }
        }
      }}>
      <LandingPageHeader/>
      {children}
      <LandingPageFooter/>
    </ConfigProvider>
  )
}
