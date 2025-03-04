// import {defineSchema} from '@convex/server';
// export default defineSchema({
//   users: defineTable({
//     name: 'users', 
// });
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(), // Define 'name' with a string type
  })
});
