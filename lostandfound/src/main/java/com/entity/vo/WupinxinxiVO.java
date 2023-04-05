package com.entity.vo;

import com.entity.WupinxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 物品信息
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-02-06 16:23:17
 */
public class WupinxinxiVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 物品名称
	 */
	
	private String wupinmingcheng;
		
	/**
	 * 物品类别
	 */
	
	private String wupinleibie;
		
	/**
	 * 物品图片
	 */
	
	private String wupintupian;
		
	/**
	 * 拾取时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date shiqushijian;
		
	/**
	 * 拾取地点
	 */
	
	private String shiqudidian;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 用户名
	 */
	
	private String yonghuming;
		
	/**
	 * 物品描述
	 */
	
	private String wupinmiaoshu;
				
	
	/**
	 * 设置：物品名称
	 */
	 
	public void setWupinmingcheng(String wupinmingcheng) {
		this.wupinmingcheng = wupinmingcheng;
	}
	
	/**
	 * 获取：物品名称
	 */
	public String getWupinmingcheng() {
		return wupinmingcheng;
	}
				
	
	/**
	 * 设置：物品类别
	 */
	 
	public void setWupinleibie(String wupinleibie) {
		this.wupinleibie = wupinleibie;
	}
	
	/**
	 * 获取：物品类别
	 */
	public String getWupinleibie() {
		return wupinleibie;
	}
				
	
	/**
	 * 设置：物品图片
	 */
	 
	public void setWupintupian(String wupintupian) {
		this.wupintupian = wupintupian;
	}
	
	/**
	 * 获取：物品图片
	 */
	public String getWupintupian() {
		return wupintupian;
	}
				
	
	/**
	 * 设置：拾取时间
	 */
	 
	public void setShiqushijian(Date shiqushijian) {
		this.shiqushijian = shiqushijian;
	}
	
	/**
	 * 获取：拾取时间
	 */
	public Date getShiqushijian() {
		return shiqushijian;
	}
				
	
	/**
	 * 设置：拾取地点
	 */
	 
	public void setShiqudidian(String shiqudidian) {
		this.shiqudidian = shiqudidian;
	}
	
	/**
	 * 获取：拾取地点
	 */
	public String getShiqudidian() {
		return shiqudidian;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
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
	 * 设置：物品描述
	 */
	 
	public void setWupinmiaoshu(String wupinmiaoshu) {
		this.wupinmiaoshu = wupinmiaoshu;
	}
	
	/**
	 * 获取：物品描述
	 */
	public String getWupinmiaoshu() {
		return wupinmiaoshu;
	}
			
}
