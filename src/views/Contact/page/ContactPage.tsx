import LayoutPage from "../../Layout/page/LayoutPage";
import ContactPageLayout from "../components/ContactPageLayout/ContactPageLayout";

const ContactPage: React.FC = (): JSX.Element => {
  return (
    <LayoutPage>
      <ContactPageLayout />;
    </LayoutPage>
  );
};

export default ContactPage;
