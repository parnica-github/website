"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ContactRequest } from "@/lib/models";
import { TextArea, Button, Input } from "../../_components/ui";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<ContactRequest>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<{ name: string; value: string }>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post("/api/send-email", formData);

    setFormData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex gap-5">
        <Input
          name="name"
          className="flex-1"
          type="text"
          placeholder={t("form.name")}
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          name="surname"
          className="flex-1"
          type="text"
          placeholder={t("form.surname")}
          value={formData.surname}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-5">
        <Input
          name="email"
          className="flex-1"
          type="email"
          placeholder={t("form.email")}
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name="phoneNumber"
          className="flex-1"
          type="text"
          placeholder={t("form.phone-number")}
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <TextArea
        name="message"
        placeholder={t("form.your-message")}
        rows={10}
        value={formData.message}
        onChange={handleInputChange}
      />
      <Button label={t("form.send")} type="submit" />
    </form>
  );
}
