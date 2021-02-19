import {
  VuexModule,
  Module,
} from 'vuex-module-decorators';

/* eslint class-methods-use-this: "off" */
@Module({
  namespaced: true,
  preserveState: true,
})
class Main extends VuexModule {
  public main;

  private socials = [
    {
      id: 1,
      iconName: 'brands/vk',
      link: '#',
    },
    {
      id: 2,
      iconName: 'brands/telegram',
      link: '#',
    },
    {
      id: 3,
      iconName: 'brands/facebook-f',
      link: '#',
    },
  ];

  get getSocial() {
    return this.socials;
  }
}

export default Main;
