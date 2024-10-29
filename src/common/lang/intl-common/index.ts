import { useIntl } from "react-intl";

export const useIntlCommon = (): any => {
  const intl = useIntl();

  const siteLabel = intl.formatMessage({
    id: "common.intl.site.label",
    description: "internationalised label for site",
    defaultMessage: "EFRA 8th Euros 2025",
  });

  return {
    siteLabel,
  };
};
