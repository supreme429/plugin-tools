import Vue from "vue";

export interface ThrottleContext extends Vue {
  delay: string | number;
  events: string;
  eventsKey: string[];
}

export function install(vue: typeof Vue, options: object): void