<template>
	<div class="content has-text-centered">
		<h2 class="is-title is-bold">AIS Demo 系统</h2>

		<div class="columns is-vcentered">
			<div class="column is-6 is-offset-3">
				<div class="box">
					<div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
					<form v-on:submit.prevent="submitForm">
						<label class="label">用户名称</label>
						<p class="control">
							<el-input size='small' v-model="data.body.username" placeholder="请输入姓名"></el-input>
						</p>
						<label class="label">性别</label>
						<p class="control">
							<el-select size='small' v-model="data.body.usersex" placeholder="请选择">
								<el-option v-for="item in data.body.sexoption" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</p>
						<label class="label">出生日期</label>
						<p class="control">
							<el-date-picker size='small' v-model="data.body.birthday" type="date" placeholder="请选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</p>


						<label class="label">出生地</label>
						<p class="control">
							<el-input size='small' v-model="data.body.birthlocation" placeholder="请输入出生地"></el-input>
						</p>

						<label class="label">工作地</label>
						<p class="control">
							<el-input size='small' v-model="data.body.worklocation" placeholder="请输入工作地"></el-input>
						</p>

						<label class="label">职位</label>
						<p class="control">
							<el-input size='small' v-model="data.body.jobtitle" placeholder="请输入职位"></el-input>
						</p>

						<label class="label">公司名称</label>
						<p class="control">
							<el-input size='small' v-model="data.body.company" placeholder="请输入公司名称"></el-input>
						</p>

						<label class="label">年薪</label>
						<p class="control">
							<el-input size='small' v-model="data.body.salary" placeholder="请输入年薪"></el-input>
						</p>

						<label class="label">房产数量</label>
						<p class="control">
							<el-input size='small' v-model="data.body.housenumber" placeholder="请输入房产数量"></el-input>
						</p>

						<label class="label">个人爱好</label>
						<p class="control">
							<el-input size='small' v-model="data.body.hobby" placeholder="请输入个人爱好"></el-input>
						</p>

						<hr>
						<p class="control">
							<el-button type="success">保存提交</el-button>
							<el-button type="danger">清空输入</el-button>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				data: {
					body: {
						username: '',
						usersex: '',
						sexoption: [{
							value: 'male',
							label: '男'
						}, {
							value: 'female',
							label: '女'
						}],
						birthday: '',
						birthlocation: '',
						worklocation: '',
						jobtitle: '',
						company: '',
						salary: '',
						housenumber: '',
						hobby: '',
						pickerOptions1: {
							disabledDate(time) {
								return time.getTime() > Date.now();
							},
							shortcuts: [{
								text: '今天',
								onClick(picker) {
									picker.$emit('pick', new Date());
								}
							}, {
								text: '昨天',
								onClick(picker) {
									const date = new Date();
									date.setTime(date.getTime() - 3600 * 1000 * 24);
									picker.$emit('pick', date);
								}
							}, {
								text: '一周前',
								onClick(picker) {
									const date = new Date();
									date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
									picker.$emit('pick', date);
								}
							}]
						},
					},
					rememberMe: false
				},
				error: null
			}
		},
		mounted() {
			if (localStorage.getItem('rememberMe') === 'true') {
				this.$set(this.data, 'rememberMe', true)
			}

			// Can set query parameter here for auth redirect or just do it silently in login redirect.
		},
		methods: {
			submitForm() {

			}
		}


	}
</script>

<style lang="less" scoped>
	.is-title {
		text-transform: capitalize;
	}
</style>
