<template>
	<el-table :data="userInfo" style="width: 100%">
		<el-table-column type="expand">
			<template slot-scope="props">
				<el-form label-position="left" inline class="demo-table-expand">
					<el-form-item label="姓名">
						<span>{{ props.row.username }}</span>
					</el-form-item>
					<el-form-item label="性别">
						<span>{{ props.row.usersex }}</span>
					</el-form-item>
					<el-form-item label="出生日期">
						<span>{{ props.row.birthday }}</span>
					</el-form-item>
					<el-form-item label="出生地">
						<span>{{ props.row.birthlocation }}</span>
					</el-form-item>
					<el-form-item label="工作地点">
						<span>{{ props.row.worklocation }}</span>
					</el-form-item>
					<el-form-item label="职位">
						<span>{{ props.row.jobtitle }}</span>
					</el-form-item>
					<el-form-item label="年薪">
						<span>{{ props.row.salary }}</span>
					</el-form-item>
					<el-form-item label="房产数量">
						<span>{{ props.row.housenumber }}</span>
					</el-form-item>
					<el-form-item label="个人爱好">
						<span>{{ props.row.hobby }}</span>
					</el-form-item>
					<el-form-item>
						<el-button size='small' type="success" @click="onSearch">进行AI匹配</el-button>
						<el-button size='small' type="warning">停止AI匹配</el-button>
					</el-form-item>
				</el-form>
			</template>
		</el-table-column>
		<el-table-column label="姓名" prop="username">
		</el-table-column>
		<el-table-column label="性别" prop="usersex">
		</el-table-column>
		<el-table-column label="职位" prop="jobtitle">
		</el-table-column>
	</el-table>
</template>

<style>
	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>

<script>
	export default {
		data() {
			return {
				userInfo: [{
					username: '张三',
					usersex: '男',
					birthday: '2001-01-01',
					birthlocation: '荷兰',
					worklocation: '上海',
					jobtitle: 'CEO',
					company: '沃尔玛',
					salary: '100k',
					housenumber: '2',
					hobby: '乒乓球'
				}, {
					username: '李四',
					usersex: '男',
					birthday: '1961-01-01',
					birthlocation: '扬州',
					worklocation: '上海',
					jobtitle: '工人',
					company: '建筑公司',
					salary: '10k',
					housenumber: '1',
					hobby: '射击'
				}, {
					username: '王五',
					usersex: '男',
					birthday: '1922-01-01',
					birthlocation: '美国',
					worklocation: '上海',
					jobtitle: '程序员',
					company: '腾讯',
					salary: '20k',
					housenumber: '2',
					hobby: '羽毛球'
				}]
			}
		}
	}
</script>
