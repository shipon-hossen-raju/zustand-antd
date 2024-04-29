// import create from zustand

import { v4 as uuidv4 } from "uuid";
import create from "zustand";
import { devtools } from "zustand/middleware";

// initial nots data
const initialNotes = [
  {
    key: 1,
    name: "Shipon Hossen Raju",
    email: "msshipon234@gmail.com",
    location: "Pabna, Dhaka, BD",
    note: "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Sogol Islam",
    email: "sogolislam@gmail.com",
    location: "Rajbari, BD",
    note: "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Billal Hossen",
    email: "billalhossen@gmail.com",
    location: "Sidney No. 1 Lake Park",
    note: "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

// generate uniq id
const generateId = () => uuidv4();

export const useZustandStore = create(
  devtools((set) => ({
    notes: [...initialNotes],

    addNotes: (note) =>
      set((state) => ({
        notes: [...state?.notes, { ...note, id: generateId, key: generateId }],
      })),

    updateNotes: (id, note) => {
      set((state) => ({
        notes: state.notes.map((n) => (n.id === id ? { ...n, ...note } : n)),
      }));
    },

    singleNotes: (id) => {
      const note = this.state.notes.find((note) => note.id === id);
      return note;
    },

    // deleteUser: (id) =>
    //   set((state) => ({ users: state.users.filter((user) => user.id !== id) })),

    // updateUser: (id, user) =>
    //   set((state) => ({
    //     users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    //   })),

    // addNote: (note) =>
    //   set((state) => ({ notes: [...state.notes, { ...note, id: uuidv4() }] })),

    // deleteNote: (id) =>
    //   set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),

    // updateNote: (id, note) =>
    //   set((state) => ({
    //     notes: state.notes.map((n) => (n.id === id ? { ...n, ...note } : n)),
    //   })),
  }))
);
