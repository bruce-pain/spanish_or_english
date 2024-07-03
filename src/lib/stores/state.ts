import { writable, type Writable } from "svelte/store";

export type state = "main" | "gay";

export let pageState: Writable<state> = writable("main");
