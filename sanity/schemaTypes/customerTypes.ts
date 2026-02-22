import { defineField, defineType } from "sanity"
import { UserIcon } from "@sanity/icons"

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "details", title: "Customer Details", default: true },
    { name: "stripe", title: "Stripe" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "details",
      description: "Customer's full name",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "details",
      validation: (rule) => [rule.required().error("Email is required")],
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      group: "stripe",
      description: " Stripe customer ID for payments",
      readOnly: true,
      validation: (rule) => [
        rule.required().error("Stripe customer Id is required"),
      ],
    }),
    defineField({
      name: "clerkUserId",
      title: "Clerk Customer ID",
      type: "string",
      group: "details",
      description: "Clerk user ID for authentication",
    }),
    defineField({
      name: "createdAt",
      title: "Created date and time",
      type: "datetime",
      group: "details",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      email: "email",
      name: "name",
      stripeCustomerId: "stripeCustomerId",
    },
    prepare({ email, name, stripeCustomerId }) {
      return {
        title: name ?? email ?? "Unknown Customer",
        subtitle: stripeCustomerId
          ? `${email ?? ""} - ${stripeCustomerId}`
          : (email ?? ""),
      }
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Email A-Z",
      name: "emailAsc",
      by: [{ field: "email", direction: "asc" }],
    },
  ],
})
