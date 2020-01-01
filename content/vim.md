---
title: "Vim"
description: "Vim editor short cut cheat sheet"
---
import { Message } from '@theme-ui/components';

## Editing

### Moving around

* Find text -\> **/text** (next hit -\> **n**, previous hit -\> **N**)
* Find an replace all occurrences of *foo* with *bar* -\> **:%s/foo/bar/g**
* Move to the beginning/end of a word (forward) -\> **w** / **e**
* Move to the beginning/end of a word (backward) -\> **b** / **ge**
* Move to beginning/end of line and start editing -\> **shift** + **i** / **shift** + **a**
* Move to the end of line -\> **$**
* Jump forward/backward one line -\> **j** / **k**
* Jump forward/backward one paragraph -\> **{** / **}**
* Move to the beginning/end of document -\> **gg** / **shift** + **g**

### Editing

* select characters -\> **v** and move the cursor keys. Selection includes the cursor
* select line -\> **shift** + **v**
* select block -\> **ctrl** + **v** and move the cursor keys
* copy selection -\> **y**
* copy line -\> **yy**
* cut selection -\> **d** 
* cut word -\> **dw** 
* cut line -\> **dd**
* paste -\> **p**
* paste line above -\> **shift** + **p**
* delete character -\> **x**
* create new line below -\> **o**
* create a new line above -\> **shift** + **o**
* undo -\> **u**
* redo -\> **ctrl** + **r**
* delete character -\> **x**
* delete character and switch to insert mode -\> **s**
* Switch to 'Insert' mode -\> **i**
* Exit 'Insert' mode -\> **ESC**


## File Management

### Explorer

* Open file explorer -\> **:Explore**
* List files in current directory -\> **:e** then press **Space** and **Ctrl**+**d**
* Open file in new window -\> **vsplit filename**
* Cycle through windows -\> **Ctrl** + **w** twice
* Close current window -\> **:hide**
* Close all windows except current one: -\> **:only**

### Save/Quit

* Save file -\> **:w**
* Save file and quit -\> **:x**
* Quit -\> **:q**
* Quit discarding changes -\> **:q!**

### Tabs

* New tab -\> **:tabnew**
* Go to next tab -\> **gt**
* Go to previous tab -\> **gT**
* Go to tab number -\> **#gt**
* Go to first tab -\> **:tabr**
* Go to last tab -\> **:tabl**
* Move current tab to the last position -\> **:tabm**
* Move current tab to the # position -\> **:tabm #**
* Close tab -\> **:close**

### Buffers

*  Open new file in buffer -\> **:e \<filename path\>**
*  Open a new file and split screen -\> **:sp**
*  List active buffers -\> **:ls**
*  Change to specific buffer -\> **:b \<buffer-number\>**
*  Move to next/previous buffer -\> **:bn** / **:bp**
*  Jump back/forward to last jump location -\> **Ctrl** + **o** / **Ctrl** + **i**

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

3. Add, for example, <a href="https://github.com/MaxMEllon/vim-jsx-pretty" target="_blank">vim-jsx-pretty</a> plugin in your **~/.vimrc** file:
```
" vim-plug
call plug#begin('~/.vim/plugged')

" plugin section
Plug 'maxmellon/vim-jsx-pretty'

" end vim-plug
call plug#end()
```
4. Launch Vim and run: `:PlugInstall`

That's it. This is how you install plugins in Vim with <a href="https://github.com/junegunn/vim-plug" target="_blank">vim-plug</a>.

# Visual Studio Code

- Toggle word wrap: `Ctrl` + `Z`
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

