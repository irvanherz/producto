import {
  Bell,
  CircleUser,
  HomeIcon,
  Menu,
  Package2,
  PlusIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

export interface LayoutStdProps {
  children: ReactNode
  activeMenuId?: string
  containerClassName?: string
}

const menus = [
  {
    id: 'product-list',
    name: 'Products',
    icon: HomeIcon,
    url: '/products'
  },
  {
    id: 'product-add',
    name: 'Add Product',
    icon: PlusIcon,
    url: '/products/add'
  }
]

export function LayoutStd({ children, activeMenuId, containerClassName }: LayoutStdProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Producto</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {menus.map(({ id, icon: Icon, url, name}) => (
                <Link key={id} 
                  to={url} 
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeMenuId === id ? 'bg-muted text-primary' : 'text-muted-foreground'}`} >
                  <Icon className ="h-4 w-4" />
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link to="#" className="flex items-center gap-2 text-lg font-semibold" >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Producto</span>
                </Link>
                {menus.map(({ id, icon: Icon, url, name}) => (
                  <Link key={id} to={url} className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${activeMenuId === id ? 'text-foreground' : 'text-muted-foreground'}`}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to='/'>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className={containerClassName}>{children}</div>
        </main>
      </div>
    </div>
  );
}
