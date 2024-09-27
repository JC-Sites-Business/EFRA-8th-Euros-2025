import LayoutPage from "../../Layout/page/LayoutPage";
import HomePageLayout from "../components/HomePageLayout/HomePageLayout";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <LayoutPage>
      <HomePageLayout />
    </LayoutPage>
  );
};

export default HomePage;
