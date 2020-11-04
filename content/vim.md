---
title: "Vim"
description: "Vim editor concepts and cheat sheet"
---
import { Message } from '@theme-ui/components';

### Modes

- Normal -\> **ESC**, **Ctrl** + **c**
- Insert -\> **i**, **I**, **a**, **A**
- Visual -\> **v**, **V**, **Ctrl** + **v**
- Command -\> **:**


### Moving around

- Search forward and backward once -\> **/** and **?**
- On search: (next hit -\> **n**, previous hit -\> **N**)
- **f**, **F** -\> "find" the next character, including the character
- **t**, **T** -\> "find" the next character, up to that character
- Search for next/previous match currently under cursor -\> **asterisk** / **#**
- Find an replace all occurrences of *foo* with *bar* -\> **:%s/foo/bar/g**
- Move to the paired parenthesis or curly brace -\> **%**
- Move to the beginning/end of a word (forward) -\> **w** / **e**
- Move to the beginning/end of a word (backward) -\> **b** / **ge**
- Move to beginning/end of line and start editing -\> **I** / **A**
- Move to the beginning/end of line -\> **0** / **$**
- Jump forward/backward one line -\> **j** / **k**
- Jump forward/backward one paragraph -\> **}** / **{**
- Jump to the top/middle/bottom of the page -\> **H** / **M** / **L**
- Jump forward/backward one page -\> **Ctrl** + **f**  / **Ctrl** + **b**
- Jump up/down half page -\> **Ctrl** + **u**  / **Ctrl** + **d**
- Jump to next line with same content -\> **Right Alt** + **3**
- Move cursor to the /top/middle/bottom of the page -\> **zt** / **zz** / **zb**
- Move cursor to the beginning/end of document -\> **gg** / **G**
- Move cursor to a specific line number -\> **:10**
- Move cursor X lines above/below -\> **10k**/**10j**

### Line numbers
- Activate absolute line numbers -\> **:set nu**
- Activate relative line numbers -\> **:set rnu**
- Toggle absolute line numbers -\> **:set nu!**
- Toggle relative line numbers -\> **:set rnu!**

### Editing

#### Operators
Operators specify which operation to perfom:

- **d** -\> Delete/Cut
- **y** -\> Yank (copy)
- **c** -\> Change (delete and enter insert mode)
- **r** -\> Replace
- **v** -\> Visually select
- **<** -\> Indent to the left
- **>** -\> Indent to the right

#### Motion
Motion specifies where the Operators operate in relation to the cursor position:

- **w** -\> word 
- **p** -\> paragraph 
- **_** -\> line
- **2j** -\> down 2 lines
- **e** -\> until the end of the word
- **$** -\> until the end of the line
- **0** -\> from the beginning of the line
- **t/T** -> until a specific character
- **f/F** -> until a specific character, including the specific character
- **Ctrl** + **v** -\> Select block
- **i** -\> INNER: inside/between something
  - **iw** -\> "inner word" (works from anywhere in a word)
  - **it** -\> "inner tag" (works within the contents of an HTML tag)
  - **i"** -\> "inner quotes"
  - **i_** -\> "inner line"
  - **is** -\> "inner sentence"
  - **ip** -\> "inner paragraph"
- **a** -\> AROUND: like INNER, but including the tag, quotes, etc
  - **at** -\> "around tag" (works within the content of an HTML tag including the tags)
  - **a"** -\> "around quotes" (works within the content of including the quotes)
  - **as** -\> "around sentence"
  - **ap** -\> "around paragraph"

Examples:

- Delete everything between a tag\*, type: `dit`
- Delete everything until it finds a dot: `dt.`
- Delete everything until it finds a dot, including the dot: `df.`

\* *It will apply inside a tag or to the nearest tag*


#### Common commands
- repeat last operation -\> **.**
- copy selection -\> **y**
- copy character-\> **yl**
- copy word -\> **yiw**
- copy line -\> **yy**
- copy all lines under the cursor -\> **:+,$y**
- copy paragraph -\> **yap**
- Select paragraph -\> **vip**
- delete/cut selection -\> **d** 
- delete/cut word from cursor position -\> **dw** 
- delete/cut whole word -\> **diw**
- delete/cut word and insert mode -\> **cw** 
- delete/cut paragraph -\> **dap**
- delete/cut line -\> **dd**
- delete/cut everything from the beginning of the line up to the cursor -\> **d0**
- delete/cut everthing from the cursor to the end of the line -\> **D** or **d$**
- delete/cut the rest of the line and insert mode -\> **C**
- delete/cut the whole line and insert mode -\> **S**
- delete/cut all lines under the cursor -\> **:+,$d**
- paste -\> **p**
- paste line above -\> **P**
- create new line below -\> **o**
- create a new line above -\> **O**
- Move current line after line 6 -\> **:m 6**
- Move line two lines above -\> **:m-2** (note that **:m-1** won't work)
- Move line one line below -\> **:m+1**
- Move line to beginning/end of document -\> **:m 0** / **:m $**
- Move block of lines -\> **:5,7m 12** (move lines 5,6,7 after line 12)
- Move block of lines -\> **:5,7m+4** (move lines 5,6,7 four lines below)
- undo -\> **u**
- redo -\> **ctrl** + **r**
- delete character -\> **x**
- replace character -\> **r**
- delete character and insert mode -\> **s**
- Switch to 'Insert' mode -\> **i**
- Exit 'Insert' mode -\> **ESC** or **Ctrl** + **c**
- Increase/Decrease the first number in a line: **Ctrl** + **a**/**x**
- Format block of text -\> **V** + *text selection* + **=**
- Indent current line -\> **<<** or **>>**
- Indent current line plus 2 lines below -\> **3<<** or **3>>**
- Select a range of lines and indent -\> **:4,17<**
- Repeat command mode last command -\> **@:**

#### Special replacement operation
How to replace *word1* for *word2* X number of times:

  1. Search for *word1*: `/word1` + **enter**
  2. Type `cgn` + `word2`
  3. **ESC**
  4. Iterate through the results:
    - Press **.** to replace next *word1* instance for *word2*
    - Press **n** to skip next *word1* instance

#### Special operations

Move all lines that start with specific character/s to the end of the document. In this example, the specific characters is `static`:
```
:g/^static/m$`
```

## File Management

### Explorer

- Open file explorer -\> **:Explore**
- List files in current directory -\> **:e** then press **Space** and **Ctrl**+**d**
- Open file in new window horizontally -\> **split filename** or **sp: filename** 
- Open file in new window vertically -\> **vsplit filename** or **vsp: filename**
- Cycle through windows -\> **Ctrl** + **w** twice
- Swap windows positions -\> **Ctrl** + **w** + **r**
- Move windows directionally -\> **Ctrl** + **w** + **H/J/K/L**
- Close current window -\> **Ctrl + q** or **:hide**
- Close all windows except current one: -\> **:only**

### Save/Quit

- Save file -\> **:w**
- Save file and quit -\> **:x**
- Quit -\> **:q**
- Quit discarding changes -\> **:q!**

### Tabs

- New tab -\> **:tabnew**
- Go to next tab -\> **gt**
- Go to previous tab -\> **gT**
- Go to tab number -\> **#gt**
- Go to first tab -\> **:tabr**
- Go to last tab -\> **:tabl**
- Move current tab to the last position -\> **:tabm**
- Move current tab to the # position -\> **:tabm #**
- Close tab -\> **:close**

### Buffers

- Open a new 100 characters width window buffer explorer -\> **:100vs .** 
- Toggle between open windows: -\> **Ctrl** + **w** + **w**
- Open new file in buffer -\> **:e <filename path\>**
- Open a new file and split screen -\> **:sp**
- List active buffers -\> **:ls**
- Change to specific buffer -\> **:b <buffer-number\>**
- Move to next/previous buffer -\> **:bn** / **:bp**
- Delete current buffer -\> **:bd**
- Jump back/forward to last jump location -\> **Ctrl** + **o** / **Ctrl** + **i**

## Customize Vim

You can customize Vim by editing `~/.vimrc`

```
let mapleader = "," 
set tabstop=2
set autoindent
set number " enable line numbering
syntax enable " syntax highlighting enabled


" KEY MAPPINGS

nmap <leader>ee :vsplit<cr> :Explore<cr> " pressing ,ee will open Explore in a new vertical window
nmap <leader>zz :split $MYVIMRC<cr> " Pressing ,zz will open ~/.vimrc in a new window
nmap <leader>zx :source $MYVIMRC<cr> " Pressing ,zx will source the changes made in ~/.vimrc
vmap <buffer> ;bo "zdi<strong><c-r>z</strong><esc>
```

**Note**: For the changes to take affect, run this command inside Vim:

`:so $MYVIMRC`

<Message variant='info'>
  🎁 <b>Gift</b> <br/>
You can download a useful <i>~/.vimrc</i> file by running the command <em>wget https://raw.githubusercontent.com/cheomanigua/config/master/vimrc</em>
</Message>


### Key mapping

- List keymaps: `:map`
- Remove keymap: `:unmap <keymap>`

### Snippet insertion

1. Create in `~/.vim/templates/` directory the text file containing the snippet
2. Add this lines in `~/.vimrc`:

```
function Rsf() 
 :read ~/.vim/templates/<textfile>
endfunction
```
3. Restart vim: `:so $MYVIMRC`
4. When you need to insert the snippet, type: `:call Rsf()`

**Note**: `Rsf()` is used as an example. You can name your function whatever you want.

<Message variant='important'>
  💡 <b>Tip</b> <br/>
	You can keymap <strong>:call Rsf()</strong> so you won't need to type in the full command.
</Message>

## Plugins

It is recommended to install a plugin manager in order to install, load and uninstall plugins. In this case we are using <a href="https://github.com/junegunn/vim-plug" target="_blank">vim-plug</a>

1. Download <a href="https://github.com/junegunn/vim-plug" target="_blank">vim-plug</a>:

  `$ curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`

2. Add **vim-plug** in your **~/.vimrc** file:
```
" vim-plug
call plug#begin('~/.vim/plugged')

" plugin section

" end vim-plug
call plug#end()
```

3. Add, for instance, <a href="https://github.com/MaxMEllon/vim-jsx-pretty" target="_blank">vim-jsx-pretty</a>, <a href="https://github.com/mattn/emmet-vim" target="_blank">emmet-vim</a> and <a href="https://github.com/neoclide/coc.nvim" target="_blank">Intellisense</a> plugins in your **~/.vimrc** file:
```
" vim-plug
call plug#begin('~/.vim/plugged')

" plugin section
Plug 'maxmellon/vim-jsx-pretty'
Plug 'mattn/emmet-vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" end vim-plug
call plug#end()
```
4. Launch Vim and run: `:PlugInstall`

That's it. This is how you install plugins in Vim with <a href="https://github.com/junegunn/vim-plug" target="_blank">vim-plug</a>.



# .VIMRC

This is a useful *.vimrc* file:

```bash
" map leader key to comma key
let mapleader = ","

" vim-plug
call plug#begin('~/.vim/plugged')

" plugin section
Plug 'maxmellon/vim-jsx-pretty'
Plug 'mattn/emmet-vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" end vim-plug
call plug#end()

" Set tab width and indentations with spaces (no hard tabs) 
set expandtab
set shiftwidth=2
set softtabstop=2

" Auto-indenting
set autoindent
set smartindent
filetype indent on
filetype plugin indent on

" Line numbers
set number " enable absolute line number
set relativenumber "enable relative line number
syntax enable " syntax highlighting enabled

"set hidden

"--- KEY MAPPINGS ---

" pressing <leader>ee will open Explore in a new vertical window
nmap <leader>ee :vsplit<cr> :Explore<cr> 

" Pressing <leader>zz will open ~/.vimrc in a new window
nmap <leader>zz :split $MYVIMRC<cr> 

" Pressing <leader>zx will source the changes made in ~/.vimrc
nmap <leader>zx :source $MYVIMRC<cr> 

"-- EMMET CONFIG --
"redefine trigger key (press emmet_leader key (,) twice to trigger
let g:user_emmet_leader_key=','
```


# Visual Studio Code

- Toggle word wrap: `Alt` + `Z`
- Select all ocurrences of selection: `Ctrl` + `Shift` + `L`
- Cut line: `Ctrl` + `X`
- Copy line: `Ctrl` + `C`
- Delete line: `Ctrl` + `Shift` + `K`
- Insert line below: `Ctrl` + `Enter`
- Insert line above: `Ctrl` + `Shift` + `Enter`
- Duplicate line above/below: `Ctrl` + `Shift` + `Alt` + `Up/Down`
- Replace: `Ctrl` + `H`
- Auto-format: `Ctrl` + `Shift` + `I`
- Go to beginning/end of line: `Home`/`End`
- Go to beginning/end of file: `Ctrl` + `Home`/`End`
- Add line comment: `Ctrl` + `K` + `C`
- Remove line comment: `Ctrl` + `K` + `U`
- Select element to jump to: `Ctrl` + `Shift` + `\`
