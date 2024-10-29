import LayoutPage from "../../Layout/page/LayoutPage";
import EventPageLayout from "../components/EventPageLayout/EventPageLayout";

const EventPage: React.FC = (): JSX.Element => {
  return (
    <LayoutPage>
      <EventPageLayout />
    </LayoutPage>
  );
};

export default EventPage;
