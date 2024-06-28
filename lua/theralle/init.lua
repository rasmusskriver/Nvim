-- Import modules
require("theralle.set")
require("theralle.remap")
require("theralle.lazy_init")

-- Cursor settings
-- vim.opt.guicursor = "n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50"
vim.opt.clipboard = 'unnamedplus'

-- Create augroups
local augroup = vim.api.nvim_create_augroup
local ThePrimeagenGroup = augroup('ThePrimeagen', {})
local yank_group = augroup('HighlightYank', {})

-- Reload function
function R(name)
    require("plenary.reload").reload_module(name)
end
--  Highlight on yank
vim.api.nvim_create_autocmd('TextYankPost', {
    group = yank_group,
    pattern = '*',
    callback = function()
        vim.highlight.on_yank({
            higroup = 'IncSearch',
            timeout = 40,
        })
    end,
})

-- Remove trailing whitespace on save
vim.api.nvim_create_autocmd('BufWritePre', {
    group = ThePrimeagenGroup,
    pattern = '*',
    command = [[%s/\s\+$//e]],
})

-- Netrw settings
vim.g.netrw_banner = 0
-- vim.g.netrw_browse_split = 0
-- vim.g.netrw_winsize = 25



-- vim.cmd('set autochdir')

-- LSP keybindings
-- vim.api.nvim_create_autocmd('LspAttach', {
--     group = ThePrimeagenGroup,
--     callback = function(e)
--         local opts = { buffer = e.buf }
--         vim.keymap.set('n', 'gd', vim.lsp.buf.definition, opts)
--         vim.keymap.set('n', 'K', vim.lsp.buf.hover, opts)
--         vim.keymap.set('n', '<leader>vws', vim.lsp.buf.workspace_symbol, opts)
--         vim.keymap.set('n', '<leader>vd', vim.diagnostic.open_float, opts)
--         vim.keymap.set('n', '<leader>vca', vim.lsp.buf.code_action, opts)
--         vim.keymap.set('n', '<leader>vrr', vim.lsp.buf.references, opts)
--         vim.keymap.set('n', '<leader>vrn', vim.lsp.buf.rename, opts)
--         vim.keymap.set('i', '<C-h>', vim.lsp.buf.signature_help, opts)
--         vim.keymap.set('n', '[d', vim.diagnostic.goto_next, opts)
--         vim.keymap.set('n', ']d', vim.diagnostic.goto_prev, opts)
--     end
-- })
-- Add filetype
-- vim.filetype.add({
-- extension = {
-- templ = 'templ',
-- }
-- })
