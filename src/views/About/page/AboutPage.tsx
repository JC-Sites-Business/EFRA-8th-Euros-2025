import LayoutPage from "../../Layout/page/LayoutPage";
import AboutPageLayout from "../components/AboutPageLayout/AboutPageLayout";

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <LayoutPage>
      <AboutPageLayout />;
    </LayoutPage>
  );
};

export default AboutPage;
