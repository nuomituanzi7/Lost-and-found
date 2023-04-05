package com.entity.view;

import com.entity.DiscusswupinxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 物品信息评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-02-06 16:23:17
 */
@TableName("discusswupinxinxi")
public class DiscusswupinxinxiView  extends DiscusswupinxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscusswupinxinxiView(){
	}
 
 	public DiscusswupinxinxiView(DiscusswupinxinxiEntity discusswupinxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, discusswupinxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
