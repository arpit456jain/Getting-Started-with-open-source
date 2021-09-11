# Step-by-Step Guide for beginners for getting started with Open-Source 

<div align="center">
<h2> Here The Contribution Begins💻</h2>

#### If you are a beginner then this repository is for you. By this tutorial you are going to learn how to make your First Pull Request for sure.

 <h3 align="center">
    <a href="https://discord.gg/gtYUZQSjTt">👋 Join our discord community <strong>CodeSmashers</strong> </a>
    </h3>
    
    
## ⭐ STAR THIS REPOSITORY THIS WILL PAY OFF MY WORK 
</div>
<hr>

### 1. The first thing you need is Git installed on your system, if it is not installed then download it as per your OS and install it.
<h3>Git Setup :- </h3>
<ul>
<li><a href="https://git-scm.com/downloads">Download Git</a> as per your OS.</li>
<li>Git installation<a href="https://www.youtube.com/watch?v=2j7fD92g-gE"> Video</a> as per your OS.</li>
<li>Install Git</li>
<li>Open the Git Bash ( Right Click )</li>
<li>Run the Commands</li>

`$ git config --global user.name "Your Name"`

`$ git config --global user.email youremail@example.com`

`$ git config --list`

<li>You should be able to see your entered name and email under <mark>user.name</mark> & <mark>user.email</mark></li>

</ul><br>
<hr>

### 2. You should have an account on GitHub if you you dont't have an account then simply make it.

### 3. You will need a text editor accoring to your comfort , I prefer Vs code 
- <a href="https://code.visualstudio.com/download">Download Vs Code</a> as per your OS.
- Vs Code installation<a href="https://www.youtube.com/watch?v=MlIzFUI1QGA"> Video</a> as per your OS. 
- Install it.

### 4. Now you just have to setup the project from GitHub to your local system.
<h3>Setting Project on your Local System :- </h3><br>
<ul>
<li>Fork this Repository or Project</li>
 <li> This will create a copy of this repository in your account.</li>
<img width="50%" align="center" src="fork.png"><br><br>
<li>Copy the link of the Repository</li><br>
<img width="50%" align="center"  src="clone.png"><br><br>
<li>Open Git bash where you want to clone the project and clone it </li>
 <li>Clone it</li>
<li>Run Command and Hit Enter <br>
 
 ```
 git clone <the link you just copied>
 ```
 <img width="70%" align="center"  src="gitclone.png"><br><br>
 
 In this case it is <br> ``` git clone  https://github.com/arpit456jain/Getting-Started-with-open-source.git ```
  </li>
 <li> After you hit enter you will notice that some downloading will start. It's actually cloning of repo form your GitHub repository to your local system.</li><br>
 <img width="60%" align="center"  src="clonning.png">
 <li> After this you will notice a folder is created with the name of repository </li><br>
 <img width="15%" align="center"  src="folder.png"><br><br>
 <li>Then just close the Git bash and open this folder and open VS code here</li><br>
 <img width="100%" align="center"  src="vscode.png"><br><br>
</ul>

### 5. Now Make necessary changes and commit them , lets say you have to add your name in readme , you already set up the project in local system . Now before starting your work always rembember to pull latest change from the main Repo.
<ul>

 <li>Fetch And Merge </li><br>
 <img width="50%" align="center"  src="fetch.png"><br>
 <li>Pull these changes in your local system</li>
 
 ```
 git pull origin master
 ```
 
 <img width="50%" align="center"  src="pullorigin.png"><br><br>
 
 <li> make a new branch and then make the changes , then commit them. make sure to commit to the new branch <br>
 <b>Never commit in master branch</b> </li>
 
 ```
 git checkout -b new_branch_name
 git add -A
 git commit -a -m "message"
 ```
 <li>After commiting your changes on your local host you have to push that changes to GitHub , make sure you push the new branch </li>
 
 ```
git push origin new_branch_name
 ```

</ul>
  
### 6. Make the Pull Request
<ul>
<li>when you push the changes you will notice a new branch will be created on GitHub and there will be a green button for creating pull request. Click on it.</li>
<br>
<img width="80%" align="center"  src="createPR.png"><br><br> 
<li>After this a new page will be open like this</li>
<img width="80%" align="center"  src="PR.png"><br><br>
<li>Now add a title and description of your PR and click on create pull request.</li>
<br>
<li>Congrats 🎉 your Pull Request is created</li><br>
<img width="80%" align="center"  src="PRcreated.png"><br><br>
</ul>

---
# Some Common Error And Their Solutions

### 1. Updates were rejected or failed to push some refs.
<img width="80%" align="center"  src="error1.png"><br>
<p> This is most common error you will find and its pretty easy to solve . </p>
<br>
<p><b>Solution:</b> You just have to pull latest changes to your local system first and then you can push them </p>

```
git pull origin master
```
<p>
Note : if your repo is a forked one and its some commit behind then first fetch n merge then pull changes

</p>

---

#  Common Git Commands you should know!!! 

### 1. Git checkout

<li>You can use the checkout command to switch the branch that you are currently working on. </li>
 
 ```
git checkout <branch name>
 ```

### 2. Git init

<li>This is the command you need to use if you want to start a new empty repository or to reinitialize an existing one in the project root. It will create a .git directory with its subdirectories. </li>
 
 ```
git init <repository name>
 ```

### 3. Git diff

<li>You can use this command to see the unstaged changes on the current branch. </li>
 
 ```
git diff
 ```

<li>If you want to see the staged changes. </li>
 
 ```
git diff --staged
 ```

<li>Or you can compare two branches: </li>
 
 ```
gif diff <branch1> <branch2>
 ```

 ### 4. Git add

<li>This is the command you need to use to stage changed files. You can stage individual files. </li>
 
 ```
git add <file path>
 ```

<li>You can also stage all files. </li>
 
 ```
git add .
 ```

 ### 5. Git branch

<li>Using git branch will list all the branches of the repository. </li>
 
 ```
git branch
 ```

<li>Or you can use it to create a new branch, without checking it out. </li>
 
 ```
git branch <new branch>
 ```

<li>To delete a branch. </li>
 
 ```
git branch -d <branch name>
 ```

 ### 6. Git log

<li>If you want to see what you have committed till now. </li>
 
 ```
git log
 ```

<li>If you want to see last 5 commits among 100000 commits. </li>
 
 ```
git log -p -1
 ```

 ### 7. Git clear

<li>To clean git bash. </li>
 
 ```
git clear
 ```

## <ins> What if I have Merge Conflicts? </ins>

#### A GitHub conflict is when people make changes to the same area or line in a file. This must be fixed before it is merged in order to prevent collision in the main branch.

- #### To read more about this, go to [Github Docs - About Merge Conflicts](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- #### To find out about how to fix a Git Conflict, go to [Github Docs - Resolve Merge Conflict](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)

---

## Now just make a Pull Request and add your name in Read me file.

## <ins>CodeSmashers Community<ins>


<!-- Please don't change the line above -->

 - ### **A** <br>
 
   - [Arpit Jain](https://github.com/arpit456jain)
   - [Ankita Puri](https://github.com/ankitapuri)
   - [Adarsh Navneet Sinha](https://github.com/geeky01adarsh)
 
 - ### **B** <br>
 - ### **C** <br>
 - ### **D** <br>
 - ### **E** <br>
 - ### **F** <br>
 - ### **G** <br>
 - ### **H** <br>
 - ### **I** <br>
 - ### **J** <br>
 - ### **K** <br>
   - [Km Astha Rani](https://github.com/astha2412)
 - ### **L** <br>
 - ### **M** <br>
 - ### **N** <br>
 - ### **O** <br>
 - ### **P** <br>
 - ### **Q** <br>
 - ### **R** <br>
 - ### **S** <br>
   - [Siddharth Parashar](https://github.com/sidparashar2001) 
 - ### **T** <br>
 - ### **U** <br>
 - ### **V** <br>
 - ### **W** <br>
 - ### **X** <br>
 - ### **Y** <br>
	-[Yanala shivaprasad reddy](https://github.com/shivaprasadyanala)
 - ### **Z** <br>

   <h1 align=center> Project Admin ❤️ </h1>
<p align="center">
<table>
  <tbody><tr>
     <td align="center"><a href="https://github.com/arpit456jain"><img alt="" src="https://avatars.githubusercontent.com/arpit456jain" width="100px;"><br><sub><b> Arpit Jain </b></sub></a><br></td> </a></td>
     <td align="center"><a href="https://github.com/ankitapuri"><img alt="" src="https://avatars.githubusercontent.com/ankitapuri" width="100px;"><br><sub><b> Ankita Puri</b></sub></a><br></td></a></td>
 

</tbody></table>
<h2 align=center> ✨ Contributors </h2>

Thanks go to these **Wonderful People** 👨🏻‍💻:      🚀  

<table>
	<tr>
		 <td>
  <a href="https://github.com/arpit456jain/Getting-Started-with-open-source/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=arpit456jain/getting-started-with-open-source" />
  </a>
		</td>
	</tr>
</table>
<br>
<b>Contributions of any kind are welcome!</b>

## Open Source Programs [click here](https://github.com/arpit456jain/Open-Source-Programs)
## show some ❤️&nbsp; by giving the star to this repo
