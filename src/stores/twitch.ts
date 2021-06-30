import { writable } from "svelte/store";
import type { TwitchMessage } from "../types/TwitchMessage";

export const twitchClient = writable(null);
export const twitchChannel = writable("");
export const twitchMessages = writable<TwitchMessage[]>([]);