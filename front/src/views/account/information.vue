<template>
  <Tabs v-model="informationTab">
    <TabPane name="info" :label="$t('profile.space.title')">
      <div class="account">
        <Form :model="formItem" label-position="top">
          <Banner :height="200" class="account-banner">
            <Row :gutter="15" class="profile-body">
              <Col>
                <UserAvatar :src="formItem.userAvatar" :size="50"></UserAvatar>
              </Col>
              <Col flex="1">
                <h3> {{ formItem.username }} </h3>
                <p>{{ $t('profile.meet', {name: formItem.username}) }} ({{ formItem.id }})</p>
              </Col>
              <Col v-if="formItem.privilege">
                <p><b>{{ $t('profile.space.form.privilege') }}</b></p>
                <PrivilegesTag :data="formItem.privilege"></PrivilegesTag>
              </Col>
            </Row>
          </Banner>

          <div class="profile-body">
            <Row :gutter="30">
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem>
                  <div slot="label">
                    <Icon type="md-key"/>
                    {{ $t('signup.form.username') }}
                  </div>
                  <Input v-model="formItem.username" :placeholder="$t('signup.form.username')" disabled>
                    <a href="javascript:void(0)" slot="append"
                       @click="modal_setusername.show = !modal_setusername.show">
                      <Icon type="md-create" size="15"/>
                    </a>
                  </Input>
                </FormItem>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem>
                  <div slot="label">
                    <Icon type="md-lock"/>
                    {{ $t('signup.form.password') }}
                  </div>
                  <Input v-model="formItem.password" :placeholder="$t('signup.form.password')" disabled type="password">
                    <a href="javascript:void(0)" slot="append"
                       @click="modal_changePassword.show = !modal_changePassword.show">
                      <Icon type="md-create" size="15"/>
                    </a>
                  </Input>
                </FormItem>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <Card dis-hover>
                  <FormItem :label="$t('account.joinedAt')">
                    <Tag type="border">
                      <TimeView :time="formItem.joinTime || new Date().getTime()">
                        <Time :time="formItem.joinTime || new Date().getTime()"/>
                      </TimeView>
                    </Tag>
                  </FormItem>
                </Card>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <Card dis-hover>
                  <FormItem :label="$t('account.lastOnlineTime')">
                    <Tag type="border">
                      <TimeView :time="formItem.lastOnlineTime || new Date().getTime()">
                        <Time :time="formItem.lastOnlineTime || new Date().getTime()"/>
                      </TimeView>
                    </Tag>
                  </FormItem>
                </Card>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 24}" v-if="isAdmin">
                <br>
                <FormItem>
                  <div slot="label">
                    <p><b>{{ $t('profile.space.form.introduction') }}</b></p>
                  </div>
                  <Card :padding="0" dis-hover>
                    <Textarea v-model="formItem.attr.introduction"
                              ref="informationTextarea"
                              :toolbar="['bold',['cs','emote']]"
                              :height="'160px'"
                              :maxlength="500"
                              :show-maxlength-label="true"
                              :placeholder="$t('profile.space.form.introduction')"></Textarea>
                  </Card>
                </FormItem>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 18}">
                <FormItem>
                  <Card dis-hover>
                    <Row type="flex" align="bottom">
                      <Col flex="1">
                        <a href="https://gravatar.com" target="_blank">
                          <svg class="ivu-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                               viewBox="0 0 27 27" role="presentation"
                               aria-hidden="true">
                            <path
                                d="M10.8 2.699v9.45a2.699 2.699 0 005.398 0V5.862a8.101 8.101 0 11-8.423 1.913 2.702 2.702 0 00-3.821-3.821A13.5 13.5 0 1013.499 0 2.699 2.699 0 0010.8 2.699z"></path>
                          </svg>
                        </a>
                      </Col>
                      <Col>
                        <a :href="formItem.userAvatar ? 'https://gravatar.com/connect/' : 'https://gravatar.com/connect/?gravatar_from=signup'"
                           target="_blank">
                          <Button>
                            <Icon type="md-link" size="20"></Icon>
                          </Button>
                        </a>
                      </Col>
                    </Row>
                    <Row :gutter="5" type="flex" align="top">
                      <Col v-for="(i, index) in [150,80,50,45,30,22]" :key="index">
                        <p>{{ i }}</p>
                        <UserAvatar :src="formItem.userAvatar" :size="i"></UserAvatar>
                      </Col>
                    </Row>
                  </Card>
                </FormItem>
              </Col>
            </Row>

            <Divider dashed></Divider>
            <template v-if="!isBindAccount">
              <Alert show-icon type="error">
                {{ $t('account.bindOrigin.title') }}
                <Icon type="ios-bulb-outline" slot="icon"></Icon>
                <template slot="desc">
                  <p>{{ $t('account.bindOrigin.content') }}</p><br>
                  <router-link to="/bindOrigin">
                    <Button>{{ $t('account.bindOrigin.travel') }}</Button>
                  </router-link>
                </template>
              </Alert>
            </template>
            <template v-else>
              <Row :gutter="30">
                <Col flex="1">
                  <FormItem :label="$t('signup.form.originName')">
                    <Input v-model="formItem.origin.originName"
                           type="text"
                           disabled
                           :autosize="{minRows: 2,maxRows: 5}"
                           placeholder=""></Input>
                  </FormItem>
                </Col>
                <Col flex="1">
                  <FormItem :label="$t('signup.form.originId')">
                    <Input v-model="formItem.origin.originUserId"
                           type="text"
                           disabled
                           :autosize="{minRows: 2,maxRows: 5}"
                           placeholder=""></Input>
                  </FormItem>
                </Col>
              </Row>
            </template>

            <Divider dashed></Divider>

            <Row :gutter="30">
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem :label="$t('profile.space.form.language')">
                  <Row>
                    <Col>
                      <Checkbox v-model="langLocalSync"
                                @on-change="switchAttr('langLocalSync',langLocalSync)"></Checkbox>
                    </Col>
                    <Col flex="1">
                      <Select v-model="formItem.attr.language"
                              class="switch-language"
                              prefix="md-globe"
                              placement="top-end"
                              :disabled="!langLocalSync"
                              @on-change="switchLanguage">
                        <Option v-for="item in languages" :value="item.name" :key="item.name"
                                :disabled="item.ignoreSave">
                          {{ item.label }}
                        </Option>
                      </Select>
                    </Col>
                  </Row>
                  <Alert show-icon v-if="langLocalSync">{{ $t('profile.space.form.languageSyncDescribe') }}</Alert>
                </FormItem>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem :label="$t('profile.space.form.showOrigin')">
                  <Alert show-icon>{{ $t('profile.space.form.showOriginDescribe') }}</Alert>
                  <i-switch v-model="formItem.attr.showOrigin"/>
                </FormItem>
              </Col>
              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem :label="$t('profile.space.form.allowDM')">
                  <Alert show-icon>{{ $t('profile.space.form.allowDMdescribe') }}</Alert>
                  <i-switch v-model="formItem.attr.allowDM"/>
                </FormItem>
              </Col>

              <Col :xs="{span: 24}" :lg="{span: 12}">
                <FormItem :label="$t('profile.space.form.showAchievement')">
                  <i-switch v-model="formItem.attr.showAchievement"/>
                </FormItem>
              </Col>
            </Row>
          </div>

          <Affix :offset-bottom="0">
            <Divider size="small" plain style="margin: 0px"></Divider>
            <Card dis-hover :padding="8" :bordered="false">
              <Row>
                <Col :xs="{span: 0}" :lg="{span: 20}">
                </Col>
                <Col :xs="{span: 24}" :lg="{span: 4}">
                  <Button type="primary" long :loading="formLoad" :disabled="userInfoLoad" @click="onSave">
                    {{ $t("basic.button.save") }}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Affix>
        </Form>

        <!-- 修改名称 S -->
        <Modal v-model="modal_setusername.show" @on-cancel="modal_setusername.index = 0"
               :footer-hide="modal_setusername.index >= 2">
          <p slot="header">
            <span>{{ $t('profile.space.modifyName.title') }}</span>
          </p>
          <div>
            <Steps :current="modal_setusername.index" size="small">
              <Step :title="$t('profile.space.modifyName.steps[0].title')"></Step>
              <Step :title="$t('profile.space.modifyName.steps[1].title')"></Step>
              <Step :title="$t('profile.space.modifyName.steps[2].title')"></Step>
            </Steps>
            <Form ref="formValidate" label-position="top">
              <div v-if="modal_setusername.index == 0">
                <br>
                <Alert type="warning">
                  <template slot="desc">
                    <p v-html="$t('profile.space.modifyName.specification1')"></p>
                    <p>
                      {{
                        $t(
                            'profile.space.modifyName.residueDegree',
                            {changeNameLeft: formItem.attr.changeNameLeft || 0}
                        )
                      }}
                    </p>
                    <br>
                    <b> {{ $t('profile.space.modifyName.specification2') }}</b>
                  </template>
                </Alert>
              </div>
              <div v-if="modal_setusername.index == 1">
                <br>
                <FormItem :label="$t('signup.form.username')">
                  <Input v-model="formItem.username" size="large" disabled/>
                </FormItem>
                <FormItem :label="$t('signup.form.newUsername')">
                  <Input v-model="formItem.newname" size="large" :placeholder="$t('signup.form.newUsername')"/>
                </FormItem>

                <FormItem :label="$t('captcha.title')" prop="captcha">
                  <Captcha ref="captcha" @getCaptchaData="getUserNameCaptchaData"></Captcha>
                </FormItem>
              </div>
              <div v-if="modal_setusername.index == 2" align="center">
                <br>
                <Icon type="ios-cloud-done" size="200" color="#19be6b"/>
                <br>
              </div>
            </Form>
          </div>
          <div slot="footer">
            <Button size="large"
                    :disabled="formItem.newname == ''"
                    :loading="modal_setusername.load"
                    v-if="modal_setusername.index > 0 && modal_setusername.index <= 1"
                    @click="modal_setusername.index = 1 ? setUserName() : null">
              {{ $t('basic.button.next') }}
            </Button>
            <Button type="warning"
                    size="large"
                    v-if="modal_setusername.index <= 0"
                    :disabled="formItem.attr.changeNameLeft == 0"
                    @click="modal_setusername.index = 1">
              {{ $t('basic.button.submit') }}
            </Button>
          </div>
        </Modal>
        <!-- 修改名称 E -->

        <!-- 修改密码 S -->
        <Modal v-model="modal_changePassword.show">
          <p slot="header">{{ $t("reset.title") }}</p>
          <div>
            <Form ref="formValidate" label-position="top">
              <FormItem :label="$t('reset.form.oldPassword')">
                <Input v-model="modal_changePassword.oldpassword" placeholder="******" minlength="6"></Input>
              </FormItem>
              <FormItem :label="$t('reset.form.newPassword')">
                <Input v-model="modal_changePassword.newpassword" placeholder="******" minlength="6"></Input>
              </FormItem>

              <FormItem :label="$t('captcha.title')" prop="captcha">
                <Captcha ref="captcha" @getCaptchaData="getPasswordCaptchaData"></Captcha>
              </FormItem>
            </Form>
          </div>
          <div slot="footer">
            <Button size="large"
                    :disabled="!modal_changePassword.oldpassword && !modal_changePassword.newpassword && !passwordCaptcha"
                    :loading="modal_changePassword.load"
                    @click="handChangePassword()">
              {{ $t('reset.title') }}
            </Button>
          </div>
        </Modal>
        <!-- 修改密码 E -->

        <Spin size="large" fix v-show="userInfoLoad">
          <Icon type="ios-loading" size="50" class="spin-icon-load"></Icon>
        </Spin>
      </div>
    </TabPane>
    <TabPane name="ad" :label="$t('profile.space.form.AD')">
      <Form class="profile-body" label-position="top">
        <Row :gutter="30">
          <Col :xs="{span: 24}" :lg="{span: 12}">
            <FormItem>
              <Alert show-icon>{{ $t('profile.space.form.ADDescribe') }}</Alert>
              <List border>
                <ListItem>
                  <ListItemMeta title="Google AD"></ListItemMeta>
                  <i-switch v-model="adsSwitch.google" @on-change="switchAttr('ads.google.switch', adsSwitch.google)"/>
                </ListItem>
                <ListItem>
                  <ListItemMeta title="BFBAN APP AD"></ListItemMeta>
                  <i-switch v-model="adsSwitch.bfbanApp"
                            @on-change="switchAttr('ads.bfban-app.switch', adsSwitch.bfbanApp)"/>
                </ListItem>
              </List>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </TabPane>
  </Tabs>
</template>

<script>
import {account_storage, api, application, http, http_token} from "@/assets/js";

import AdsGoogle from "@/components/ads/google";
import Textarea from "@/components/textarea";
import Captcha from "@/components/captcha";
import UserAvatar from "@/components/UserAvatar";
import PrivilegesTag from "@/components/PrivilegesTag";
import TimeView from "@/components/TimeView";
import Banner from "@/components/Banner";

export default new application({
  name: "account",
  data() {
    return {
      privileges: [],
      languages: [],
      informationTab: 'info',
      adsSwitch: {
        google: account_storage.getConfiguration('ads.google.switch'),
        bfbanApp: account_storage.getConfiguration('ads.bfban-app.switch')
      },
      userInfoLoad: false, // 用户信息获取状态
      formLoad: false, // 表单提交状态
      langLocalSync: false, // 用户信息保存语言是否同步开关

      modal_changePassword: {
        load: false,
        show: false,
        newpassword: "",
        oldpassword: ""
      },

      modal_setusername: {
        load: false,
        show: false,
        index: 0
      },

      usernameCaptcha: "",
      passwordCaptcha: "",
    }
  },
  components: {Textarea, TimeView, Captcha, UserAvatar, PrivilegesTag, Banner, AdsGoogle},
  created() {
    this.http = http_token.call(this);
    this.ready();
  },
  methods: {
    async ready() {
      const {tag} = this.$route.query;
      const languages = await import('/public/config/languages.json');
      const privileges = await import('/public/config/privilege.json');
      this.privileges = this.privileges.concat(privileges.child)
      this.languages = this.languages.concat(languages.child)

      if (tag)
        this.informationTab = tag || 'info';

      await this.getUserinfo();
    },
    getUserNameCaptchaData(e) {
      this.usernameCaptcha = e;
    },
    getPasswordCaptchaData(e) {
      this.passwordCaptcha = e;
    },
    /**
     * 修改密码
     */
    handChangePassword() {
      const {newpassword = '', oldpassword = ''} = this.modal_changePassword;
      this.modal_changePassword.load = true;
      this.http.post(api["user_changePassword"], {
        data: {
          data: {
            newpassword,
            oldpassword
          },
          captcha: this.passwordCaptcha
        }
      }).then(res => {
        const d = res.data;
        if (d.success === 1) {
          this.$Message.success(this.$t(`basic.tip['${d.code}']`, {
            message: d.message || ""
          }));

          this.$store.dispatch('signout').then(() => {
            this.signout();
          });

          this.modal_changePassword.show = false;

          this.$router.push({name: "signin"});
          return;
        }

        this.$Message.error(this.$t(`basic.tip['${d.code}']`, {
          message: d.message || ""
        }));
      }).finally(() => {
        this.modal_changePassword.load = false;
      });
    },
    /**
     * 注销
     */
    signout() {
      http.post(api["account_signout"], {
        headers: {
          'x-access-token': this.$store.state.user.token
        }
      }).then(res => {
        const d = res.data;
        if (d.success === 1) {
          this.$router.push('/signin');
        }
      })
    },
    /**
     * 切换语言
     * @param lang
     */
    switchLanguage(lang) {
      this.formItem.attr.language = lang;
    },
    /**
     * 修改名字
     */
    setUserName() {
      if (!this.formItem.newname) return;

      this.modal_setusername.load = true;

      this.http.post(api["user_changeName"], {
        data: {
          data: {
            newname: this.formItem.newname,
          },
          captcha: this.usernameCaptcha
        }
      }).then(res => {
        const d = res.data;

        if (d.success === 1) {
          this.modal_setusername.index = 2;
          this.$Message.success(this.$t(`basic.tip['${d.code}']`, {
            message: d.message || ""
          }));
          return;
        }

        this.modal_setusername.index = 0;
        this.$Message.error(this.$t(`basic.tip['${d.code}']`, {
          message: d.message || ""
        }));
      }).finally(async () => {
        this.modal_setusername.load = false;
        this.usernameCaptcha = "";

        await this.getUserinfo();
      })
    },
    /**
     * 保存表单
     */
    onSave() {
      this.formLoad = true;
      this.formItem.language = this.$root.$i18n.locale;
      this.http.post(api["user_me"], {
        data: {
          data: {attr: this.formItem.attr}
        }
      }).then(res => {
        const d = res.data;

        if (d.success === 1) {
          // 同步本地语言
          if (d.data.attr.language) {
            this.$store.dispatch('setLang', d.data.attr.language);
          }

          this.$Message.success(this.$t(`basic.tip['${d.code}']`, {
            message: d.message || ""
          }));
          return;
        }

        this.$Message.error(this.$t(`basic.tip['${d.code}']`, {
          message: d.message || ""
        }));
      }).finally(() => {
        this.formLoad = false;
      })
    },
    /**
     * 获取用户信息
     */
    async getUserinfo() {
      this.userInfoLoad = true;

      return new Promise(resolve => {
        this.http.get(api["user_me"], {}).then(res => {
          const d = res.data;

          if (d.success === 1) {
            this.$store.dispatch('setUserInfo', d.data);

            this.formItem = Object.assign(this.formItem, d.data);
            if (this.$refs.informationTextarea)
              this.$refs.informationTextarea.updateContent(this.convertInformation(this.formItem.attr.introduction));
          }
        }).finally(() => {
          this.userInfoLoad = false;

          this.checkLangLocalSync();
          resolve();
        })
      })
    },
    /**
     * 处理特殊格式
     */
    convertInformation(text) {
      const csRegex = /<span>\{([^:]+):([^}]+)\}<\/span>/g;
      const emoteRegex = /<span>\[([^|]+)\|([^\]]+)\]<\/span>/g;
      return text
          .replace(csRegex, '<span data-type="contracted-syntax" data-cs-type="$1" data-cs-value="$2">{$1:$2}</span>')
          .replace(emoteRegex, '<span data-type="emote" data-id="$1|$2">[$1|$2]</span>');
    },
    /**
     * 检查本地语言是否同步
     */
    checkLangLocalSync() {
      this.langLocalSync = account_storage.getConfiguration('langLocalSync');
    },
    /**
     * 属性开关
     * @param key
     * @param val
     */
    switchAttr(key, val) {
      account_storage.updateConfiguration(key, val);
    }
  },
  computed: {
    formItem: {
      set(value) {
        this.data = value;
      },
      get() {
        this.checkLangLocalSync();
        let data = Object.assign({
          password: '******',
          origin: null,
          userAvatar: '',
          newname: '',
          username: '',
          attr: {
            introduction: '',
            language: ''
          }
        }, this.data, this.$store.state.$userinfo);
        return data;
      }
    },
    isBindAccount() {
      let formItem = this.formItem;
      if (!formItem.origin) return false;
      if (formItem.origin.originName || formItem.origin.originUserId) return true;
      return false;
    }
  }
})
</script>

<style lang="less" scoped>
.account {
  position: relative;
}

.account-banner {
  margin-top: -16px;
  margin-bottom: 15px;
}
</style>
