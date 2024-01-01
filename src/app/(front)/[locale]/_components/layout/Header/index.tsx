import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import { ClientHeader } from "./ClientHeader";

export function Header() {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "Layout")}>
      <ClientHeader />
    </NextIntlClientProvider>
  );
}
