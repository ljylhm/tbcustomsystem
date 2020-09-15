<template>
  <div class="transfer-account-container">
    <el-dialog :visible.sync="showTransFerModal" :title="'修改默认转账银行卡'">
      <div class="transfer-bank-modal">
        <div class="transfer-bank_header">
          <el-tooltip effect="light" placement="top" content>
            <div slot="content">
              每位用户只有10次设置银行卡的机会，请谨慎使用。
            </div>
            <i
              class="el-icon-question add-goods_icon_question"
            ></i> </el-tooltip
          >绑定银行卡次数： <span class="zy-font">8</span>次
        </div>

        <div class="transfer-bank_form">
          <div class="pay-account_item">
            <div class="pay-account_item_label">原转账银行卡：</div>
            <div class="pay-account_item_content"></div>
            兴业银行 尾号2410
          </div>

          <div class="pay-account_item">
            <div class="pay-account_item_label">开户人：</div>
            <div class="pay-account_item_content"></div>
            张三
          </div>
        </div>

        <div class="transfer-bank_form">
          <div class="transfer-bank_form_header">
            请在下方输入新的转账银行卡信息：
          </div>
          <el-form>
            <el-form-item :label="'转账银行：'" label-width="140px">
              <!-- bankData -->
              <el-select
                v-model="bankForm.bankId"
                placeholder="请选择银行"
                class="short-input"
              >
                <el-option
                  v-for="item in bankData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item :label="'银行卡号：'" label-width="140px">
              <el-input
                v-model="bankForm.bankNumber"
                placeholder="请输入正确的银行卡号"
                class="middle-input"
              ></el-input>
            </el-form-item>

            <el-form-item :label="'银行开户人：'" label-width="140px">
              <el-input
                v-model="bankForm.bankNumber"
                placeholder="请输入正确的开户人姓名"
                class="middle-input"
              ></el-input>
            </el-form-item>

            <el-form-item :label="'开户地：'" label-width="140px">
              <v-address></v-address>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="warning">确认提交</el-button>
        <el-button @click="closeTransFerModal">返回</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="showBtnGuideModal" :title="'操作按钮使用指南'">
      <div class="transfer-btng-modal">
        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_one"
            >
              转账成功
            </div>
          </div>
          <div class="transfer-btng_item_right">
            把<span class="zy-font">选中的数据</span
            >标记为【转账成功】，请确保<span class="zy-font">已成功转账后</span
            >再执行此操作
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_one"
            >
              全部转账成功
            </div>
          </div>
          <div class="transfer-btng_item_right">
            全部转账成功<span class="zy-font">把筛选条件下的所有数据</span
            >标记为【转账成功】，请务必先进行<span class="zy-font"
              >转账失败标记后</span
            >再进行此操作。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_two"
            >
              转账失败
            </div>
          </div>
          <div class="transfer-btng_item_right">
            把<span class="zy-font">选中的数据</span
            >标记为【转账失败】。附：招行批量转账结果快速查询教程。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_two"
            >
              批量导出
            </div>
          </div>
          <div class="transfer-btng_item_right">
            将<span class="zy-font">所有等待转账数据</span
            >导出成Excel表格，可以直接导入招行网银进行批量转账，完成转账操作后请务必<span
              class="zy-font"
              >返回平台进行转账成功/转账失败操作</span
            >
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_one"
            >
              上传凭证
            </div>
          </div>
          <div class="transfer-btng_item_right">
            当买手反馈实际没有收到转账时，需要卖家<span class="zy-font"
              >上传转账成功的凭证</span
            >。若转账实际上<span class="zy-font">被银行退回</span
            >，请将该笔订单<span class="zy-font">标记为【转账失败】</span>。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div
              class="transfer-btng_item_left_btn transfer-btng_item_left_btn_one"
            >
              查看凭证
            </div>
          </div>
          <div class="transfer-btng_item_right">
            查看卖家已上传的凭证，如果凭证错误，请自行修改。如无法修改，请联系平台客服，QQ。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">转账金额说明</div>
          </div>
          <div class="transfer-btng_item_right">
            转账金额为<span class="zy-font">买家</span>在购物平台<span
              class="zy-font"
              >实际支付的金额</span
            >，您发布任务时所设置的担保金额与买家支付金额间可能存在误差，请以<span
              class="zy-font"
              >转账金额为准</span
            >对买家进行转账
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeAlipayGuideModal">关闭</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="showStatusGuideModal" :title="'转账状态说明'">
      <div class="transfer-btng-modal">
        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">
              等待转账
            </div>
          </div>
          <div class="transfer-btng_item_right">
            需要卖家进行转账的订单记录。每天0点平台会更新当天需要处理的订单信息，卖家务必<span
              class="zy-font"
              >严格遵照此表格转账，切勿私自进行转账操作</span
            >，以免造成重复转账。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">
              已导出
            </div>
          </div>
          <div class="transfer-btng_item_right">
            标记此订单信息已经导出，在状态上等同于等待转账。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">
              转账成功
            </div>
          </div>
          <div class="transfer-btng_item_right">
            代表货款已经成功转出，请不要把尚未转账的信息标记转账成功，以免造成误会。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">
              转账失败
            </div>
          </div>
          <div class="transfer-btng_item_right">
            代表货款转账失败，需要买家核实银行信息后重新提交转账申请，<span
              class="zy-font"
              >切勿自行对转账失败的订单再次转账</span
            >。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text">
              未到账
            </div>
          </div>
          <div class="transfer-btng_item_right">
            代表买手反馈实际上货款并未到账，需要卖家<span class="zy-font"
              >提供转账凭证</span
            >。
          </div>
        </div>

        <div class="transfer-btng_item">
          <div class="transfer-btng_item_left">
            <div class="transfer-btng_item_left_text zy-font">
              温馨提示
            </div>
          </div>
          <div class="transfer-btng_item_right">
            对于转账失败的订单，买家可重新申请提现。买家<span class="zy-font"
              >重新提现</span
            >后，该笔订单次日在【等待转账】页面展示时会<span class="zy-font"
              >标记为红色 </span
            >，便于卖家识别该笔订单曾经进行过转账失败操作。
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeStatusModal">关闭</el-button>
      </span>
    </el-dialog>

    <div class="person-left">
      <VPaySlide :current-index="'/transFerAccountManage'" />
    </div>
    <div class="person-right">
      <el-tabs v-model="activeName" class="custom-tab_container">
        <el-tab-pane label="等待转账" name="first">
          <div class="wait-transfer-container">
            <div class="wait-transfer-left">
              <p class="zy-font">关于转账的平台规定：</p>
              <p>
                1、必须在每天下午16：00前完成前一天的所有转账，否则无法发布任务；
              </p>
              <p>2、严禁使用支付宝转账，一经发现将终止合作；</p>
              <p>3、对于超时未转账的订单，买家有权申请退款；</p>
              <p>4、对于多次超时的卖家，平台有权终止合作。</p>
              <p>
                转账操作流程：导出转账信息—进行转账操作—返回平台
                <span class="zy-font weight-font">标记转账失败订单</span>—再
                <span class="zy-font weight-font">标记转账成功订单</span>。
              </p>
              <p>
                批量转账流程：只支持招商银行，请点击查看教程。
                <span class="link-font">如何使用招商银行批量转账？</span>
              </p>
            </div>
            <div class="wait-transfer-right">
              <div class="wait-transfer-right_item">
                招商银行批量转账问题汇总
              </div>
              <div class="wait-transfer-right_item">卖家转账常见问题</div>
              <div class="wait-transfer-right_item">支付宝免费快速提现秘籍</div>
              <div
                class="wait-transfer-right_item dz-gif-2"
                @click="openAlipayGuideModal"
              >
                操作按钮使用指南
              </div>
              <div
                class="wait-transfer-right_item dz-gif-2 no-border"
                @click="openStatusModal"
              >
                转账状态说明
              </div>
            </div>
          </div>

          <div class="wait-transfer-form">
            <div class="wait-transfer-form_header">
              默认转账银行卡：兴业银行 尾号
              <span class="zy-font">2410</span>开户人：杨荣慧
              <el-button
                type="primary"
                size="mini"
                :style="{ marginLeft: '10px' }"
                @click="editTarnsferModal"
                >修改</el-button
              >
            </div>
            <div>
              <el-form :inline="true">
                <el-form-item :label="'转账状态：'">
                  <el-select
                    class="short-input"
                    v-model="searchForm.transferStatus"
                    placeholder="请选择"
                    @change="handleTransFerChange"
                  >
                    <el-option
                      v-for="item in transFerData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item :label="'订单编号：'">
                  <el-input
                    v-model="searchForm.ordreId"
                    class="short-input"
                  ></el-input>
                </el-form-item>

                <el-form-item :label="'转账申请时间：'">
                  <el-date-picker
                    v-model="searchForm.create_time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item :label="'转账申请时间：'">
                  <el-button type="primary" size="small" round>查询</el-button>
                </el-form-item>
              </el-form>

              <div>
                <span class="zy-font"
                  >温馨提示：默认展示所有需要待转账记录，导出规则同理，</span
                >如果需要查询和导出指定日期，请在上方筛选日期。
                <span class="zy-font"
                  >温馨提示：转账前请商家仔细核对，如果您不清楚应该如何操作转账，请咨询客服处理。因商家自身原因导致的重复转账造成的损失，平台只负责协助商家进行追回</span
                >
              </div>
            </div>
            <div class="table-data_container">
              <el-table :data="waitTransFerData">
                <el-table-column prop="ordreId" label="订单编号" />
                <el-table-column prop="buyerId" label="买号" />
                <el-table-column prop="goodsOriginalMoney" label="商品本金" />
                <el-table-column prop="employMoney" label="佣金" />
                <el-table-column prop="transferAccountMoney" label="转账金额" />
                <el-table-column prop="cashOutName" label="提现人" />
                <el-table-column prop="bank_id" label="银行卡号" />
                <el-table-column prop="bank_name" label="开户行" />
                <el-table-column prop="bank_detail_name" label="支行名称" />
                <el-table-column prop="waitTransFerStatus" label="转账状态" />
                <el-table-column prop="end_time" label="转账截止时间" />
              </el-table>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="转账结果">
          <div class="result-transfer-container">
            <div class="result-transfer_form">
              <el-form :inline="true">
                <el-form-item :label="'订单编号：'">
                  <el-input
                    v-model="searchResultForm.orderId"
                    class="short-input"
                  ></el-input>
                </el-form-item>

                <el-form-item :label="'转账状态：'">
                  <el-select
                    v-model="searchResultForm.status"
                    placeholder="请选择转账状态"
                    class="short-input"
                  >
                    <el-option
                      v-for="item in resultStatusData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item :label="'转账申请时间：'">
                  <el-date-picker
                    v-model="searchResultForm.create_time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" round>查询</el-button>
                  <el-button
                    type="warning"
                    round
                    :style="{ marginLeft: '10px' }"
                    >导出</el-button
                  >
                </el-form-item>
              </el-form>
            </div>

            <div class="table-data_container">
              <el-table :data="notTransFerData">
                <el-table-column prop="ordreId" label="订单编号" />
                <el-table-column prop="transferAccountMoney" label="转账金额" />
                <el-table-column prop="cashOutName" label="提现人" />
                <el-table-column prop="cashOutBank" label="开户行" />
                <el-table-column prop="cashOutDetailBank" label="支行名称" />
                <el-table-column prop="waitTransFerStatus" label="转账状态" />
                <el-table-column prop="end_time" label="转账截止时间" />
              </el-table>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="未到账反馈">
          <div class="not-pay-transfer-container">
            <div class="not-pay-transfer_header">
              <div class="not-pay-transfer_text">
                下方表格记录的是买家提交的提现未到账反馈，请复制订单编号到网银核实该笔订单的转账情况：
              </div>
              <div class="not-pay-transfer_text">
                1、若经核实，该笔订单显示为“转账成功”，请在上传凭证窗口<span
                  class="zy-font"
                  >提交</span
                >该笔订单的成功转账凭证;
              </div>
              <div class="not-pay-transfer_text">
                2、若经核实，实际上<span class="zy-font"
                  >未对该订单进行转账</span
                >或<span class="zy-font">实际转账失败</span
                >了，请在上传凭证窗口点击<span class="zy-font"
                  >【转账失败】</span
                >按钮，将该笔订单的状态变更为转账失败；
              </div>
              <div class="not-pay-transfer_text">
                <span class="zy-font">温馨提示：</span>请务必在<span
                  class="zy-font"
                  >每日中午12点前</span
                >对需要上传凭证的订单进行操作，否则<span class="zy-font"
                  >任务将被隐藏</span
                >。
              </div>
            </div>

            <div class="not-pay-transfer_form">
              <el-form :inline="true">
                <el-form-item :label="'订单编号：'">
                  <el-input
                    v-model="searchResultForm.orderId"
                    class="short-input"
                  ></el-input>
                </el-form-item>

                <el-form-item :label="'转账状态：'">
                  <el-select
                    v-model="searchResultForm.status"
                    placeholder="请选择转账状态"
                    class="short-input"
                  >
                    <el-option
                      v-for="item in resultStatusData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item :label="'转账申请时间：'">
                  <el-date-picker
                    v-model="searchResultForm.create_time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" round>查询</el-button>
                  <el-button
                    type="warning"
                    round
                    :style="{ marginLeft: '10px' }"
                    >导出</el-button
                  >
                </el-form-item>
              </el-form>
            </div>

            <div class="not-pay-transfer_table">
              <el-table :data="resultTransFerData">
                <el-table-column prop="ordreId" label="订单编号" />
                <el-table-column prop="transferAccountMoney" label="转账金额" />
                <el-table-column
                  prop="payAccountBankName"
                  label="转账人银行卡"
                />
                <el-table-column prop="cashOutBankName" label="提现人银行卡" />
                <el-table-column prop="cashOutName" label="提现人姓名" />
                <el-table-column prop="waitTransFerStatus" label="转账状态" />
                <el-table-column prop="end_time" label="转账截止时间" />
              </el-table>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="买家已退款">
          <div class="not-pay-transfer-container">
            <div class="not-pay-transfer_header">
              <div class="not-pay-transfer_text">
                下方表格记录的是买家已在购物平台<span class="zy-font">退款成功</span>的订单。对于以下情况的订单，买家有权利到购物平台进行退款：
              </div>
              <div class="not-pay-transfer_text">
               1、若经核实，该笔订单显示为“转账成功”，请在上传凭证窗口提交该笔订单的成功转账凭证
              </div>
              <div class="not-pay-transfer_text">
               2、卖家频繁操作转账失败的订单。
              </div>
              <div class="not-pay-transfer_text">
               退款成功后，管理员会将订单状态变更为"已退款"。
              </div>
            </div>

            <div class="not-pay-transfer_form">
              <el-form :inline="true">
                <el-form-item :label="'订单编号：'">
                  <el-input
                    v-model="searchResultForm.orderId"
                    class="short-input"
                  ></el-input>
                </el-form-item>

                <el-form-item :label="'转账状态：'">
                  <el-select
                    v-model="searchResultForm.status"
                    placeholder="请选择转账状态"
                    class="short-input"
                  >
                    <el-option
                      v-for="item in resultStatusData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item :label="'转账申请时间：'">
                  <el-date-picker
                    v-model="searchResultForm.create_time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" round>查询</el-button>
                  <el-button
                    type="warning"
                    round
                    :style="{ marginLeft: '10px' }"
                    >导出</el-button
                  >
                </el-form-item>
              </el-form>
            </div>

            <div class="not-pay-transfer_table">
              <el-table :data="returnMoneyData">
                <el-table-column prop="ordreId" label="订单编号" />
                <el-table-column prop="transferAccountMoney" label="转账金额" />
                <el-table-column
                  prop="payAccountBankName"
                  label="转账人银行卡"
                />
                <el-table-column prop="cashOutBankName" label="提现人银行卡" />
                <el-table-column prop="cashOutName" label="提现人姓名" />
                <el-table-column prop="waitTransFerStatus" label="转账状态" />
                <el-table-column prop="end_time" label="转账截止时间" />
              </el-table>
            </div>
            
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VPaySlide from "@/components/VPaySlide.vue"; // @ is an alias to /src
import { openSuccessMsg, openWarnMsg } from "@/lib/notice";
import VAddress from "@/components/VAddress.vue";

@Component({
  components: {
    VPaySlide,
    VAddress,
  },
})
export default class AddGoods extends Vue {
  activeName = "first";
  showTransFerModal = false;
  showBtnGuideModal = false;
  showStatusGuideModal = false;

  transFerData = [
    {
      label: "等待转账",
      value: "1",
    },
    {
      label: "已导出",
      value: "2",
    },
  ];

  bankData = [
    {
      label: "光大银行",
      value: "1",
    },
    {
      label: "工商银行",
      value: "2",
    },
    {
      label: "建设银行",
      value: "3",
    },
    {
      label: "中国银行",
      value: "4",
    },
    {
      label: "农业银行",
      value: "5",
    },
    {
      label: "交通银行",
      value: "6",
    },
    {
      label: "招商银行",
      value: "7",
    },
    {
      label: "中信银行",
      value: "8",
    },
    {
      label: "民生银行",
      value: "9",
    },
    {
      label: "广发银行",
      value: "10",
    },
    {
      label: "兴业银行",
      value: "11",
    },
    {
      label: "华夏银行",
      value: "12",
    },
    {
      label: "平安银行",
      value: "13",
    },
    {
      label: "浦发银行",
      value: "14",
    },
    {
      label: "其他银行",
      value: "15",
    },
  ];

  resultStatusData = [
    {
      label: "转账成功",
      value: "1",
    },
    {
      label: "转账失败",
      value: "2",
    },
    {
      label: "未到账-待商家回复",
      value: "3",
    },
    {
      label: "未到账-待买手回复",
      value: "4",
    },
    {
      label: "已退款",
      value: "5",
    },
  ];

  waitTransFerData = [
    {
      ordreId: "123456",
      buyerId: "123456",
      goodsOriginalMoney: "12",
      employMoney: "100",
      transferAccountMoney: "100000",
      cashOutName: "100",
      bank_id: "12",
      bank_name: "工商银行",
      bank_detail_name: "郑州市金水路支行",
      waitTransFerStatus: "正常",
      end_time: "2019-12-01",
    },
  ];

  resultTransFerData = [
    {
      ordreId: "123456",
      transferAccountMoney: "100000",
      payAccountBankName: "",
      payAccountBankId: "",
      cashOutBankName: "",
      cashOutBankId: "",
      cashOutName: "100",
      waitTransFerStatus: "正常",
      end_time: "2019-12-01",
    },
  ];

  notTransFerData = [
    {
      ordreId: "123456",
      transferAccountMoney: "100000",
      payAccountBankName: "",
      payAccountBankId: "",
      cashOutBankName: "",
      cashOutBankId: "",
      cashOutDetailBank: "",
      cashOutName: "100",
      waitTransFerStatus: "正常",
      end_time: "2019-12-01",
    },
  ];

  returnMoneyData = [{
      ordreId: "123456",
      transferAccountMoney: "100000",
      payAccountBankName: "",
      payAccountBankId: "",
      cashOutBankName: "",
      cashOutBankId: "",
      cashOutDetailBank: "",
      cashOutName: "100",
      waitTransFerStatus: "正常",
      end_time: "2019-12-01",
  }]

  bankForm = {
    bankId: "",
    bankNumber: "",
    bankCreater: "",
    bankAddress: "",
  };

  searchForm = {
    transferStatus: "",
    ordreId: "",
    create_time: "",
  };

  searchResultForm = {
    ordreId: "",
    status: "",
    create_time: "",
  };

  closeTransFerModal() {
    this.showTransFerModal = false;
  }

  openTransFerModal() {
    this.showTransFerModal = true;
  }

  openAlipayGuideModal() {
    this.showBtnGuideModal = true;
  }

  closeAlipayGuideModal() {
    this.showBtnGuideModal = false;
  }

  openStatusModal() {
    this.showStatusGuideModal = true;
  }

  closeStatusModal() {
    this.showStatusGuideModal = false;
  }

  editTarnsferModal() {
    this.openTransFerModal();
  }

  handleTransFerChange() {}
}
</script>

<style lang="scss">
@mixin flex($direction) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: $direction;
}

@mixin setHeight($height) {
  height: $height;
  line-height: $height;
}

.zy-font {
  color: red;
}

.weight-font {
  font-weight: 600;
}

// input的宽度
.short-input {
  width: 150px;
}

.middle-input {
  width: 300px;
}

.link-font {
  color: #409eff;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #ff9900;
  }
}

.xs-font {
  color: #4882f0;
}

.zy-weight {
  font-weight: 600;
}

.font-18 {
  font-size: 18px;
}

.font-14 {
  font-size: 14px;
}

.no-border {
  border: none !important;
}

.dz-gif-2 {
  background: url(http://img.baishou123.cn/public/shop/css/img/dianzan1.gif)
    no-repeat 0px center !important;
}

.pay-account_item {
  @include flex(flex-start);
  .pay-account_item_label {
    width: 120px;
    text-align: right;
    font-weight: 600;
  }
  .pay-account_item_content {
    padding-left: 4px;
  }
  align-items: center;
  margin-bottom: 22px;
  .pay-account_input {
    width: 350px;
  }
}

.space-margin-right-20 {
  margin-right: 20px;
}

.el-table td,
.el-table th {
  text-align: center;
}

.transfer-bank-modal {
  .transfer-bank_header {
    text-align: right;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  .transfer-bank_form {
    padding: 20px 0px 0px;
    border-bottom: 1px dashed #ddd;
    .transfer-bank_form_header {
      margin-bottom: 10px;
    }
  }
}

.transfer-btng-modal {
  .transfer-btng_item {
    @include flex(flex-start);
    // height: 60px;
    padding: 14px 0px;
    border-bottom: 1px dashed #ddd;
    .transfer-btng_item_left {
      width: 200px;
      @include flex(center);
      align-items: center;
      .transfer-btng_item_left_text {
        color: #4882f0;
      }
      .transfer-btng_item_left_btn {
        padding: 5px 15px;
        border-radius: 5px;
        color: #fff;
      }
      .transfer-btng_item_left_btn_one {
        background: #4882f0;
      }
      .transfer-btng_item_left_btn_two {
        background: #f90;
      }
    }
    .transfer-btng_item_right {
      @include flex(flex-start);
      align-items: center;
      flex: 1;
      color: #000;
      line-height: 20px;
    }
  }
}

.table-data_container {
  margin-top: 10px;
}

.transfer-account-container {
  width: 1400px;
  height: 400px;
  text-align: left;
  margin: 20px auto 0px;
  @include flex(flex-start);
  flex-wrap: nowrap;

  .person-left {
    width: 180px;
  }
  .person-right {
    padding-left: 30px;
    flex: 1;

    .wait-transfer-container {
      @include flex(space-between);
      padding: 20px 0px 30px;
      border-bottom: 1px dashed #ddd;
      .wait-transfer-left {
        flex: 1;
        & > p {
          margin-bottom: 10px;
          font-size: 14px;
        }
      }
      .wait-transfer-right {
        width: 350px;
        height: 205px;
        border-radius: 5px;
        padding: 5px 10px;
        border: 1px solid #ddd;
        background: #f0f0f0;
        font-size: 14px;
        .wait-transfer-right_item {
          background: url(http://img.baishou123.cn/public/shop/css/img/dianzan.gif)
            no-repeat 0px center;
          padding-left: 30px;
          line-height: 38px;
          border-bottom: 1px solid #ddd;
          &:hover {
            cursor: pointer;
            color: #ff9900;
          }
        }
      }
    }

    .wait-transfer-form {
      font-size: 14px;
      padding: 20px 0px;
      .wait-transfer-form_header {
        margin-bottom: 10px;
      }
    }

    .result-transfer-container {
    }
  }

  .shop-operation_btn {
    margin-bottom: 10px;
  }

  .pay-account_item {
    @include flex(flex-start);
    color: #000;
    .pay-account_item_label {
      width: 120px;
      text-align: right;
      font-weight: 600;
    }
    .pay-account_item_content {
      padding-left: 4px;
    }
    align-items: center;
    margin-bottom: 22px;
    .pay-account_input {
      width: 350px;
    }
  }

  .collect-container {
  }
}

.not-pay-transfer-container {
  .not-pay-transfer_text {
    margin-bottom: 10px;
    font-size: 14px;
    color: #000;
  }
  .not-pay-transfer_header {
    padding: 10px 0px;
    border-bottom: 1px dashed #ddd;
    margin-bottom: 15px;
  }

  .not-pay-transfer_table {
    padding: 10px 0px;
  }
}
</style>
