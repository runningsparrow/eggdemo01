var tree = [{
	"nodes": [{
		"nodes": [{
			"nodes": [{
				"level": "4",
				"id": "4",
				"text": "天猫超市",
				"parentid": "3"
			}, {
				"level": "4",
				"id": "5",
				"text": "个人店铺",
				"parentid": "3"
			}],
			"level": "3",
			"id": "3",
			"text": "淘宝商城",
			"parentid": "2"
		}],
		"level": "2",
		"id": "2",
		"text": "电商平台",
		"parentid": "1"
	}, {
		"nodes": [{
			"level": "3",
			"id": "7",
			"text": "支付宝",
			"parentid": "6"
		}],
		"level": "2",
		"id": "6",
		"text": "支付平台",
		"parentid": "1"
	}, {
		"nodes": [{
			"level": "3",
			"id": "9",
			"text": "虾米音乐",
			"parentid": "8"
		}],
		"level": "2",
		"id": "8",
		"text": "音乐平台",
		"parentid": "1"
	}],
	"level": "1",
	"id": "1",
	"text": "阿里巴巴",
	"parentid": "0"
}, {
	"nodes": [{
		"nodes": [{
			"level": "3",
			"id": "12",
			"text": "英雄联盟",
			"parentid": "11"
		}, {
			"level": "3",
			"id": "13",
			"text": "地下城与勇士",
			"parentid": "11"
		}, {
			"level": "3",
			"id": "14",
			"text": "穿越火线",
			"parentid": "11"
		}],
		"level": "2",
		"id": "11",
		"text": "游戏平台",
		"parentid": "10"
	}, {
		"nodes": [{
			"level": "3",
			"id": "16",
			"text": "腾讯QQ",
			"parentid": "15"
		}, {
			"nodes": [{
				"level": "4",
				"id": "18",
				"text": "个人微信",
				"parentid": "17"
			}, {
				"level": "4",
				"id": "19",
				"text": "企业微信",
				"parentid": "17"
			}],
			"level": "3",
			"id": "17",
			"text": "微信",
			"parentid": "15"
		}],
		"level": "2",
		"id": "15",
		"text": "聊天平台",
		"parentid": "10"
	}, {
		"nodes": [{
			"level": "3",
			"id": "21",
			"text": "QQ音乐",
			"parentid": "20"
		}],
		"level": "2",
		"id": "20",
		"text": "音乐平台",
		"parentid": "10"
	}],
	"level": "1",
	"id": "10",
	"text": "腾讯科技",
	"parentid": "0"
}]
  

  function getTree() {
    // Some logic to retrieve, or generate tree structure
    // return data;
    return tree
}


function inittree()
{
    $('#tree').treeview({
        data: getTree(),
        color:"#428bca",
        levels:0,
        click:function(event,node){
            console.log(node)
        },
        onNodeSelected:function(event,node){
      
          
      
          console.log("选中了"+ node.text);
      
      
          if(node.state.expanded == false){
              $(this).treeview('expandNode',node.nodeId);
              
              
          }
          else{
              $(this).treeview('collapseNode',node.nodeId);
              
          }
      
          node.state.selected = false;
          
          console.log(node)
          
          
          
          
      
          
        },
        onNodeUnselected:function(event,node){
          console.log("取消了"+ node.text);
      
          // node.state.selected = false

          
      
        }
    });

    


    
    
}


inittree();




     