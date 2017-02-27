"去掉讨厌的有关vi一致性模式，避免以前版本的一些bug和局限
set nocompatible

"显示行号
set nu

"语法高亮
syntax on

"自动检测文件类型并加载相应的设置
"filetype plugin indent on

"保存修改历史记录的行数
set history=1000

"使用自动对起，也就是把当前行的对起格式应用到下一行
set autoindent
"依据上面的对齐格式，智能的选择对起方式
set smartindent

"按一次tab是2个字符
set tabstop=2
"按一次tab前进2个字符
set shiftwidth=2
"删除由四个空格组成的tab时，一次删除一个tab（也就是2个空格）
set softtabstop=2
"输入tab时自动转换为空格
set expandtab

"设置匹配模式，类似当输入一个左括号时会匹配相应的那个右括号
set showmatch

"当vim进行编辑时，如果命令错误，会发出一个响声，该设置去掉响声
set vb t_vb=

"高亮查找结果
set hlsearch

"方便查询时:
" 如要查找book单词，当输入到/b时，会自动找到第一个b开头的单词，
" 当输入到/bo时，会自动找到第一个bo开头的单词，
" 依次类推，进行查找时，使用此设置会快速找到答案，
" 当你找要匹配的单词时，别忘记回车
set incsearch

"backspace有几种工作方式:
"   indent : 如果用了:set indent,:set ai等自动缩进，想用退格键将字段缩进的删掉，必须设置这个选项。否则不响应。
"   eol    : 如果插入模式下在行开头，想通过退格键合并两行，需要设置eol。
"   start  : 要想删除此次插入前的输入，需设置这个。
set backspace=indent,eol,start

"指定tab符号和空格符号的显示样式
set list listchars=tab:--,trail:+

"显示每行末尾的空格符号
highlight WhitespaceEOL ctermbg=cyan
match WhitespaceEOL /\s\+$/

"不产生备份文件
set nobackup

"vim中的swp即swap文件，在编辑文件时产生，它是隐藏文件，如果原文件名是data，那么swp文件名就是.data.swp。
"如果文件正常退出，则此文件自动删除。以下两种情况不会删除swp文件：
"   1) Vim非正常退出,这种情况下,除非手动删除swp文件（也可以在vim提示时删除），否则它会一直存在。
"   2) 多个程序同时编辑一个文件。
"可以通过该选项禁止产生swp文件:
set noswapfile

" 设置状态行展示在屏幕底部的倒数第二行
set laststatus=2
" 状态栏的定制类似C语言特性，常见的定制格式：
" c ~>列号
" l ~>行号
" r ~>只读标记
" t ~>文件名
" y ~>文件内容类型
" \&ff ~> 文件格式 unix\mac\dos
" 文件格式之前需要添加%完成转义，空格，竖线等特殊字符需要使用斜杠\完成转义。
set statusline=%t\ %y\ format:\ %{&ff};\ [%c,%l]
