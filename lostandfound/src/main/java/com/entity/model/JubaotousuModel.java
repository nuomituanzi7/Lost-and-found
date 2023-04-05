package com.entity.model;

import com.entity.JubaotousuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 举报投诉
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2023-02-06 16:23:17
 */
public class JubaotousuModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 举报内容
	 */
	
	private String jubaoneirong;
		
	/**
	 * 相关凭证
	 */
	
	private String xiangguanpingzheng;
		
	/**
	 * 用户名
	 */
	
	private String yonghuming;
		
	/**
	 * 姓名
	 */
	
	private String xingming;
		
	/**
	 * 举报时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date jubaoshijian;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：举报内容
	 */
	 
	public void setJubaoneirong(String jubaoneirong) {
		this.jubaoneirong = jubaoneirong;
	}
	
	/**
	 * 获取：举报内容
	 */
	public String getJubaoneirong() {
		return jubaoneirong;
	}
				
	
	/**
	 * 设置：相关凭证
	 */
	 
	public void setXiangguanpingzheng(String xiangguanpingzheng) {
		this.xiangguanpingzheng = xiangguanpingzheng;
	}
	
	/**
	 * 获取：相关凭证
	 */
	public String getXiangguanpingzheng() {
		return xiangguanpingzheng;
	}
				
	
	/**
	 * 设置：用户名
	 */
	 
	public void setYonghuming(String yonghuming) {
		this.yonghuming = yonghuming;
	}
	
	/**
	 * 获取：用户名
	 */
	public String getYonghuming() {
		return yonghuming;
	}
				
	
	/**
	 * 设置：姓名
	 */
	 
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
				
	
	/**
	 * 设置：举报时间
	 */
	 
	public void setJubaoshijian(Date jubaoshijian) {
		this.jubaoshijian = jubaoshijian;
	}
	
	/**
	 * 获取：举报时间
	 */
	public Date getJubaoshijian() {
		return jubaoshijian;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
