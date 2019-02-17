<template>
	<el-carousel indicator-position="outside">
		<el-carousel-item v-for="item in 3" :key="item">
			<el-row>
				<el-col :span="16">
					<el-card :body-style="{ padding: '0px' }">
						<img src="../../../docs/static/img/hamburger.png" class="image">
						<div style="padding: 14px;">
							<span>这里是姓名</span>
							<div class="bottom clearfix">
								<time class="time">{{ currentDate }}</time>
								<el-button type="text" class="button">查看详细</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</el-carousel-item>
	</el-carousel>

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

	.el-carousel__item h3 {
		color: #ghostwhite;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: ghostwhite;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #ghostwhite;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 20%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>

<script>
	// 	export default {
	// 		data() {
	// 			return {

	// 			}
	// 		}
	// 	}
	export default {
		data() {
			return {
				currentDate: new Date()
			}
		}
	}
</script>
