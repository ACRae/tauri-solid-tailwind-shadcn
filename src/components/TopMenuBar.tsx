import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { ConfigColorMode, useColorMode } from "@kobalte/core";
import { createSignal } from "solid-js"; 
 
const TopMenuBar = () => {
	const { colorMode, setColorMode } = useColorMode();
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<Menubar class="h-8 rounded-none p-0">
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						New Window <MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled>New Incognito Window</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Share</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Email link</MenubarItem>
							<MenubarItem>Messages</MenubarItem>
							<MenubarItem>Notes</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						Print... <MenubarShortcut>⌘P</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo <MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Find</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Search the web</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Find...</MenubarItem>
							<MenubarItem>Find Next</MenubarItem>
							<MenubarItem>Find Previous</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>Cut</MenubarItem>
					<MenubarItem>Copy</MenubarItem>
					<MenubarItem>Paste</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem checked>
						Always Show Full URLs
					</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarItem inset>
						Reload <MenubarShortcut>⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled inset>
						Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Toggle Fullscreen</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Hide Sidebar</MenubarItem>
				</MenubarContent>
			</MenubarMenu>

			{/* Theme Menu */}
			<MenubarMenu open={isOpen()} onOpenChange={setIsOpen}>
				<MenubarTrigger>Theme</MenubarTrigger>
				<MenubarContent>
					<MenubarRadioGroup
						value={colorMode()} // Sets the selected theme based on current color mode
						onChange={(value) => {
							setColorMode(value as ConfigColorMode)
							setIsOpen(false)
						}}
						>
							<MenubarRadioItem value="light">Light</MenubarRadioItem>
							<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
					</MenubarRadioGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
 
export default TopMenuBar;


// /*
// {/* Radio Group for Theme Selection */}
// <MenubarRadioGroup
// value={colorMode()} // Sets the selected theme based on current color mode
// onChange={(value) => setColorMode(value as ConfigColorMode)} // Change the theme based on selection
// >
// {/* Light Theme Option */}
// <MenubarRadioItem value="light">Light</MenubarRadioItem>

// {/* Dark Theme Option */}
// <MenubarRadioItem value="dark">Dark</MenubarRadioItem>

// {/* System Theme Option */}
// <MenubarRadioItem value="system">System</MenubarRadioItem>
// </MenubarRadioGroup>
// */