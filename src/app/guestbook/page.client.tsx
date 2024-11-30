"use client";

import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { InsertGuestbookEntrySchema } from "@/db/schema/guestbook-entries";
import { createGuestbookEntry } from "./actions";

export default function GuestbookClient() {
  const [lastResult, action] = useActionState(createGuestbookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: InsertGuestbookEntrySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="mt-4 flex flex-col gap-2"
      noValidate
    >
      <Textarea
        label="Description"
        placeholder="Enter your message"
        className="w-full"
        key={fields.message.key}
        name={fields.message.name}
        errorMessage={fields.message.errors}
        isInvalid={!fields.message.valid}
      />
      <Button type="submit">Create</Button>
    </form>
  );
}
