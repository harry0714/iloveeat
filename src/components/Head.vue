<template>
  <div>
<div class="head-top"> 
	<div class="container">
		<div class="header-right1">
			<div class="cart box_1">
		
				<a href=""><img src="@/assets/images/cart.png" alt=""> 結帳</a>
				<a href="<%= request.getContextPath() %>/front-end/login.jsp">登入</a> 
				<a href="<%= request.getContextPath() %>/front-end/member/memberregister.jsp">加入會員</a>
				<a href="<%=request.getContextPath() %>/front-end/store/storeRegister.jsp">申請成為店家</a>
				
				<a href="<%= request.getContextPath()%>/checkout/Cart.jsp"><img src="@/assets/images/cart.png" alt=""> 結帳</a>
				<a style="text-decoration: none">${user.name} 你好</a>
				<a href="<%= request.getContextPath() %>/front-end/member/personal.jsp">會員專區</a>
				<a href="<%= request.getContextPath() %>/member/member.do?action=memberlogout">登出</a>	
				
				<a style="text-decoration: none">${store.store_name} </a>
				<a href="<%= request.getContextPath() %>/front-end/store/personal.jsp">店家專區</a>
				<a href="<%= request.getContextPath() %>/store/store.do?action=storeLogout">登出</a>	
				
				<div class="clearfix"> </div>
			</div>
		</div>
	
	</div>
</div>
  <div class="header">
		
		<div class="container">
			<div class="logo">
				<a href="<%= request.getContextPath() %>/front-end/index.jsp"><img src="@/assets/images/logo.png" class="img-responsive" alt=""></a>
			</div>
			<div class="header-left">
				<div class="head-nav">
					<span class="menu"> </span>
						<ul>
						
						</ul>
						
				</div>
					<div class="clearfix"> </div>	
				</div>
					<div class="clearfix"> </div>
			</div>
	</div>  
  </div>
</template>
<script>
export default {
    
}
</script>