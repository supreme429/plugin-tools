import { ComponentOptions, VNode, PluginObject } from "vue";

import { Throttle } from "./throttle";
import { ThrottleContext } from "../types";

const component: ComponentOptions<ThrottleContext> = {
  name: "throttle",
  props: ["delay", "events"],
  data(): object {
    return {
      eventsKeys: []
    };
  },
  created(): void {
    this.eventsKeys = Array.isArray(this.events) ? this.events : [this.events];
  },
  render(): VNode {
    const vnode: VNode = this.$slots.default[0];
    let componentListeners: any = {};
    let nativeListeners = {};

    // components
    if (vnode.componentOptions) {
      componentListeners = vnode.componentOptions.listeners;
    }

    if (vnode.data && vnode.data.on) {
      nativeListeners = vnode.data.on;
    }
    this.eventsKeys.forEach(
      (event): void => {
        const cfn = componentListeners[event];
        const nfn = nativeListeners[event];
        if (cfn) {
          componentListeners[event] = Throttle(cfn, this.delay);
        } else if (nfn) {
          nativeListeners[event] = Throttle(nfn, this.delay);
        }
      }
    );

    return vnode;
  }
};

const VueThrottle: PluginObject<object> = {
  install(Vue): void {
    Vue.component("Throttle", component);
  }
};

export default VueThrottle;
