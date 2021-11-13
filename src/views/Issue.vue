<template>
  <div style="background-color: #EEF1F9; width: 100%; min-height: 800px;">
    <div style="width: 1000px; min-height: 740px; margin: 0 auto;">
      <div>
        <top-part-intro>问题与讨论</top-part-intro>

        <div style="background-color: white; width: 100%; min-height: 647px;">
          <div style="margin:0 50px;">
            <div style="display:flex; margin-bottom: 18px; padding-top: 20px">
              <div class="blueStrip"></div>
              <span class="text">提出问题</span>
            </div>
          </div>

          <div style="width: 900px; margin-left: 50px">
            <editor
              ref="editor"
              cacheName="problemsCache"
              @on-change="handleChange"
            />

            <!--class是要组件局部的class才会覆盖Button组件原有的样式，如果是全局的class不会覆盖原来组件的样式-->
            <Button @click="saveContent" class="override" style="margin-left: 0">保存</Button>
            <Button @click="clearContent" class="override">清空</Button>
          </div>

          <div style="margin:0 50px; margin-top: 40px">
            <div style="display:flex; margin-bottom: 18px">
              <div class="blueStrip"></div>
              <span class="text">问题讨论</span>
            </div>
          </div>

          <div style="width: 900px; margin: 0 50px; height: auto;">
            <div style="display: flex; width: 100%; height: 50px;">
              <div style="font-size:16px;color:rgba(51,51,51,1);line-height: 50px">
                全部问题（{{totalIssues}}）
              </div>
            </div>

            <div class="specificIssue" v-for="(item, index) in shownIssuesList" :key="index">
              <div style="min-height: 85px; margin-bottom: 29px; display: flex; padding-top: 15px">
                <div>
                  <div
                    style="min-height: 15px; margin: 17px 0;font-size:14px;"
                    v-html="item.content"
                  >
                  </div>
                  <div style="height: 12px;color:rgba(153,153,153,1); font-size:14px;">
                    {{item.time}}发表
                  </div>
                </div>
              </div>
              <div style="height:1px;background:rgba(230,230,230,1);"></div>
            </div>

            <div style="height: 100px;">
              <div style="height: 26px; padding-top: 34px; display: flex; float: right; ">
                <div style="margin-right: 10px; height: 26px; line-height: 26px;">共{{(totalIssues > 50) ? 50 :
                  totalIssues}}条记录
                </div>
                <!-- i是从1开始的-->
                <div v-for="i in pages" :key="i" class="bottomDiv" @click="choosePage(i)" :style="pagesColor[i-1]">
                  {{i}}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopPartIntro from "../components/content/TopPartIntro";
  import Editor from "../components/common/editor/Editor";

  export default {
    name: "CommonProblems",
    components: {
      TopPartIntro,
      Editor
    },
    data() {
      return {
        html: "",
        text: "",
        problems: "",

        totalIssues: 0,
        pages: 0,
        chosenPage: 1,
        issuesList: [],
        shownIssuesList: [],
        pagesColor: [],
        issueInput: '',
      };
    },
    methods: {
      handleChange(html, text) {
        this.html = html;
        this.text = text;
        // console.log(html)
      },
      saveContent() {
        // 缺省保存html code
        this.$http.post('/issue/', this.qs.stringify({'issue': this.html})).then(res => {
          if (res.status === 200) {
            if (res.data.code === 1000) {
              this.$Notice.success({
                title: '保存通知',
                desc: '成功提交issue'
              });
              this.getRecords()
            } else {
              this.$Notice.error({
                title: '保存失败',
                desc: '原因为：' + res.data.msg.toString()
              });
            }
          } else {
            this.$Message.error(res.status.toString());
          }
        }).catch(err => {
          this.$Message.error(err.toString());
        })
      },
      clearContent() {
        this.$refs.editor.setHtml('');
      },

      choosePage(index) {
        this.$set(this.pagesColor, this.chosenPage - 1, "background:rgba(244,244,244,1); color:rgba(102,102,102,1);");
        this.$set(this.pagesColor, index - 1, "background:rgba(255,98,1,1);color:white;");
        this.chosenPage = index;
        this.shownIssuesList = this.IssuesList.slice(index * 5 - 5, index * 5);
      },

      getRecords() {
        this.$http.get('/issue/').then(res => {
          if (res.status === 200) {
            let returnData = res.data;
            if (returnData.code === 1000) {
              // 可以展示评论
              this.totalIssues = returnData.total;
              this.pages = Math.ceil(this.totalIssues / 5);
              this.issuesList = returnData.issues;
              this.shownIssuesList = this.issuesList.slice(0, 5);  // 默认展示第一页即前5条评论
              // 底部pages第一页是缺省展示的，所以颜色初始化为橙色
              this.$set(this.pagesColor, 0, "background:rgba(255,98,1,1);color:white;");
              //如果有第二页及更多，设置颜色
              for (let i = 2; i <= this.pages; i++) {
                this.$set(this.pagesColor, i - 1, "background:rgba(244,244,244,1); color:rgba(102,102,102,1);");
              }
            } else {
              this.$Message.warning(returnData.msg);  // 警告级别
            }
          } else {
            this.$Message.error(res.status.toString())  // 错误级别
          }
        }).catch(err => {
          this.$Message.error(err.toString())
        });
      }
    },
    created() {
      this.getRecords()
    }
  };
</script>

<style scoped>
  .override {
    background: rgba(0, 70, 140, 1);
    color: rgba(255, 255, 255, 0.95);
    margin: 20px 0 0 20px;
  }

  .text {
    height: 20px;
    font-size: 18px;
    font-family: Microsoft YaHei, serif;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
  }

  #issueInput {
    width: 894px;
    height: 94px;
    background: rgba(252, 252, 252, 1);
    border: 1px solid rgba(230, 230, 230, 1);
  }

  .unLight {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
  }

  .bottomDiv {
    width: 26px;
    height: 26px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 26px;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
  }

  .specificIssue {
    min-height: 110px;
    color: rgba(51, 51, 51, 1);
  }

  .base-button {
    width: 120px;
    height: 40px;
    background: rgba(0, 70, 140, 1);
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 480px;
    color: white
  }
</style>

