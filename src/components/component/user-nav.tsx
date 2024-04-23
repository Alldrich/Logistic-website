import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function UserNav() {
  return (
    <Button variant={'outline'} asChild>
      <Link role="link" href="/sign-in">
        Sign in
      </Link>
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
    //       <Avatar className="h-8 w-8">
    //         <AvatarImage
    //           src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //           className="rounded-full"
    //           height="32"
    //           width="32"
    //           alt="@username"
    //           style={{
    //             aspectRatio: '32/32',
    //             objectFit: 'cover',
    //           }}
    //         />
    //         <AvatarFallback>SC</AvatarFallback>
    //       </Avatar>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuLabel className="font-normal">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">Alice Brown</p>
    //         <p className="text-xs leading-none text-muted-foreground">alice@example.com</p>
    //       </div>
    //     </DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>
    //         <Link href="/dashboard">Dashboard</Link>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>Profile</DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>Log out</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
