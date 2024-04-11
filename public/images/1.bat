@echo off
setlocal enabledelayedexpansion

:: 设置图片文件夹路径，这里假设脚本和图片在同一目录下
set "SOURCE_DIR=%~dp0"
:: 设置输出目录
set "OUTPUT_DIR=%SOURCE_DIR%webp"

:: 检查输出目录是否存在，如果不存在则创建
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

:: 循环遍历当前目录下的所有图片文件，这里以.jpg为例
for %%I in ("%SOURCE_DIR%*.jpg") do (
    :: 获取不包含扩展名的文件名
    set "FILENAME=%%~nI"
    :: 转换图片格式
    cwebp -q 80 "%%I" -o "%OUTPUT_DIR%/!FILENAME!.webp"
)

for %%I in ("%SOURCE_DIR%*.png") do (
    :: 获取不包含扩展名的文件名
    set "FILENAME=%%~nI"
    :: 转换图片格式
    cwebp -q 80 "%%I" -o "%OUTPUT_DIR%/!FILENAME!.webp"
)

echo 转换完成。
pause
