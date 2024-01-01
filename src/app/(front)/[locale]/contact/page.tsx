import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import pick from "lodash/pick";

import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import { Text, Title } from "../_components/ui";
import { ContactForm } from "./_components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const messages = useMessages();

  return (
    <DetailPageWrapper title={t("title")}>
      <div className="flex gap-10 flex-col sm:flex-row">
        <div className="h-96 sm:flex-1 sm:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.8735980899387!2d29.083256390543944!3d41.09360834027503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacb5af36da229%3A0x49908cf6601b8c5f!2zUGFybmljYSBTYcSfbMSxayDDh8O2esO8bWxlcmk!5e0!3m2!1str!2str!4v1698061609816!5m2!1str!2str"
            loading="lazy"
            className="rounded-lg shadow"
            width="100%"
            height="100%"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-1 flex-col gap-10">
          <Title>{t("form.title")}</Title>
          <Text className="!text-gray-500">{t("form.back-to-you")}</Text>

          <NextIntlClientProvider messages={pick(messages, "Contact")}>
            <ContactForm />
          </NextIntlClientProvider>
        </div>
      </div>
    </DetailPageWrapper>
  );
}
