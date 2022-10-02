        /* Dom challenge */

        let myHead = document.createElement("header");
        let div = document.createElement("div");
        let myUl = document.createElement("ul");
        let list = document.createElement("li");
        let div2 = document.createElement("div")
        
        let divText = document.createTextNode("Elzero")
        let listText1 = document.createTextNode("Home")
        
        let myfooter = document.createElement("footer")
        let footerText = document.createTextNode("Copynight 2022")
        
        
        div.setAttribute("titile" , "website")
        document.body.style.cssText = "background-color:rgb(236,236,236);"
        div.style.cssText = "font-weight: bold ; color: rgb(35,1,69,110); font-size: 20px"
        myUl.style.cssText = "padding: 0px; margin: 0px; list-style: none;"
        myHead.style.cssText = "display: flex; justify-content:space-between; align-items: center; padding: 20px; background-color: rgb(255,255,255);"
        div2.style.cssText = "display: flex; justify-content: center;flex-wrap: wrap; padding: 20px; gap: 20px; min-height: calc(100vh-142px); box-sizing:border-box; background-color:  " 
        myfooter.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255); "
        
        document.body.appendChild(myHead)
        myHead.className=("website-head")
        myHead.appendChild(div)
        div.appendChild(divText)
        div.className = ("logo")
        myHead.appendChild(myUl)
        myUl.className = ("menu")
        myUl.appendChild(list)
        list.appendChild(listText1)
        
        document.body.appendChild(div2)
        div2.className=("content");
        
        document.body.appendChild(myfooter)
        myfooter.className= "footer"
        myfooter.appendChild(footerText)
        
        for(let i = 1 ; i<=15 ; i++){
        
            let div3 = document.createElement("div")
            let div3Text = document.createTextNode("product")
            let myspan = document.createElement("span")
            let spanText = document.createTextNode(i)
        
            div2.appendChild(div3)
            div3.className=("product");
            div3.appendChild(myspan)
            div3.appendChild(div3Text)
            myspan.appendChild(spanText)
        
            div3.style.cssText = "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px) /3);box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;"
            myspan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-botton:10px; margin-top: 10px;"
        }
        