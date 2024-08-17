import { useIntl } from "react-intl";
import { useIntlCommon } from "../../../../common/lang/intl-common/index";
import type { ViewModelHook } from "../../../../common/types/types";

import navBarData from "../../../../common/assets/navbar.json";

export type T_NavBarItem = {
  _id: string;
  title: string;
  link: string;
};

export type T_NavBar = {
  header: string;
  headerItems: T_NavBarItem[];
};

const useNavBarViewModel: ViewModelHook<T_NavBar> = () => {
  const { siteLabel } = useIntlCommon();
  const intl = useIntl();

  try {
    navBarData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

    return {
      header: siteLabel,
      headerItems: navBarData,
    };
  } catch (error) {
    return error;
  }
};

export default useNavBarViewModel;
