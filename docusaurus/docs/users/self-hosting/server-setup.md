---
sidebar_position: 1
---

# Configuring a NixOS Server

:::warning

The ability to self-host is still new and experimental. We'd love for people to try it out and let us know how it goes, but we currently can't dedicate a lot of engineering resources to helping you if you run into difficulties. Host at your own risk!
:::

## What is self-hosting, again?

Self-hosting means setting up your very own BobaBoard server for you to use as you wish.

To make web-based software like BobaBoard accessible to the world, you need a **server** to host your files and "serve" them up on request. The network settings, installed programs, and security credentials of a server are collectively called the **server configuration**, or server config. In this guide, we'll show you how to use Nix and NixOS to set up a server configuration that's perfect for hosting BobaBoard.

### Self-hosting with NixOS

Traditional servers are manually configured, which is time-consuming and prone to error. While you *can* configure a BobaBoard server that way, the instructions on this page show you how to use the pre-packaged [BobaBoard NixOS module](https://github.com/bobaboard/boba-nixos) we put together. The module can be easily installed on any server running NixOS.

NixOS is an operating system that uses the Nix langauge to do all kinds of cool things. You don't need to know anything about NixOS to self-host BobaBoard, though, because we *also* put together a [pre-made server configuration](https://github.com/BobaBoard/selfhost-example/) that makes it easy to get a NixOS server up and running. 

To make use of our config, you'll need to:
1. Install [NixOS](https://nixos.org/) on a server you can connect to
1. Edit our pre-made server configuration to configure your server for your own use
1. Link your own domain to your newly-configured server.

To follow these instructions, you will need:
* A GitHub account *(and the knowledge of how to clone a repository)*
* VSCode
* An unconfigured server
* A [tailscale](https://tailscale.com/pricing) account

## Creating a Server

:::warning
In our self-hosting demo livestream, Ms Boba showed viewers how to install NixOS on a [Hetzner](https://www.hetzner.com/cloud/) VPS (virtual private server). While the instructions provided below assume you're also using Hetzner, it's not required! Other server options include [DigitalOcean](https://www.digitalocean.com/products/droplets/), [Vultr](https://www.vultr.com/), and even your own physical computer in your home (if you don't mind leaving your computer on 100% of the time!)
:::

For the most up-to-date information on how to create a server, refer to the instructions offered by your service provider. If you're using our recommended provider, [Hetzner](https://www.hetzner.com/cloud/), you can find their [guide here](https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/).

On the "Create a server" screen of your service provider, you will need to indicate your choice in each of the following categories:
* **Server name:** a name (any name!) for your server.
* **Region:** this is where your new server will live, not where *you* live. If you know where your users are likely to be from, choose a server close to their location. If not, New York is a safe choice.
* **Image/Operating system:** We suggest Ubuntu.
* **Virtual CPU type:** BobaBoard doesn't need much CPU usage during everyday use, but setting it up goes very slowly if you pick the cheapest option. Our suggestion: Pay for a bit of higher-tier CPU use, then drop to a lower tier once you're all set up. All you'd have to redo would be [this step](#getting-files-from-the-new-server).
* **Network address options:** We suggest both Public IPv4 & Public IPv6.
* **SSH key(s):** If you don't already have an SSH key you want to use, you can follow GitHub's instructions to [generate one](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
* **Cloud configuration**: See below.

You can skip choosing anything about SSD volumes, firewalls, automatic backups, server placement groups, or labels.

### Setting up your server's initial cloud configuration

The instructions you add to the cloud configuration section will tell the new server what to do when it first comes to life. These instructions will:

1. Save your public SSH key, allowing you to connect to your server after NixOS is done installing
1. Run a command to replace your server's current operating system with NixOS
 

#### Creating your SSH key file

:::danger
The server's first instructions **must** include your public SSH key—without your public SSH key as part of the initial configuration, you won't be able to use your public key to give the server any further instructions, so you'll be locked out and forced to start over.
:::

Copy and paste the following `YAML` data into the Cloud Config field. Then replace everything between the bracketed quotation marks with your public SSH key. 
```
#cloud-config write_files:

- path: /etc/nixos/host.nix
  permissions: '0644'
  content: |{pkgs, ...}:{   
    users.users.root.openssh.authorizedKeys.keys = [“ {your public key} ”];
  }
```

#### Installing NixOS on startup

The `YAML` configuration must also include an instruction to overwrite the contents of your server machine with NixOS. We'll be using a [user-made NixOS installation script](https://github.com/elitak/nixos-infect) called **nixos-infect** for this. 

WHen we last updated this article, the instructions for the script looked like this:
> 0. Read and understand [the script](https://github.com/elitak/nixos-infect/blob/master/nixos-infect)
> 1. Deploy any custom configuration you want on your host
> 2. Deploy your host as non-Nix Operating System.
> 3. Deploy an SSH key for the root user.
> 4. run the script with:
> `  curl https://raw.githubusercontent.com/elitak/nixos-infect/master/nixos-infect | NIX_CHANNEL=nixos-23.05 bash -x`

The command they use to run the script in step 4 is a little different from the one we'll be pasting into our cloud configuration. However, you need to make sure that the link in their instructions *is* the link you use. Check [the instrucitons on their GitHub page](https://github.com/elitak/nixos-infect) and update the link in our script if the link they're using has changed. 

Our script:
```
runcmd:
- curl https://raw.githubusercontent.com/elitak/nixos-infect/master/nixos-infect | PROVIDER=hetznercloud NIX_CHANNEL=nixos-23.05 bash 2>&1 | tee /tmp/infect.log
```

Add our script to the bottom of the cloud configuration box. Then go ahead and spin up (start) your server! It will take some time for NixOS to install, so you can work on the next steps of your server config while you wait.

## Writing the NixOS Configuration

Now that the server has been created, you'll need to identify, edit, and apply several additional configuration files. (This configuration doesn't include any BobaBoard setup—we're just working on the NixOS server itself.)

In this section, you will:
- copy our sample configuration files
- review the structure and purpose of the copied files for future reference
- tweak files & folders to reflect your own server instead of our sample

### Clone our sample repository

Use Git to clone our sample repository, [selfhost-example](https://github.com/BobaBoard/selfhost-example), to your local machine. 

```
git clone git@github.com:BobaBoard/selfhost-example.git
```

If you're unfamiliar with cloning repositories, you can follow GitHub's tutorial [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 

### Familiarize yourself with relevant new files and folders

When you copy files from someone else, it's a good idea to have a basic sense of what they are and why they're important—especially if you're planning to tinker with them.

Nix is a unique language, so don't be surprised if some of the syntax in these files is especially unfamiliar!

#### Your flake.nix file

- `selfhost-example`
    - **`flake.nix`**

The `flake.nix` file is the backbone of your NixOS server configuration. It includes directions to other publicly-available NixOS configurations on GitHub, which allow you to add new programs to your server without having to configure them yourself. Including directions to external resources also allows your server to easily stay up to date with whatever changes are made to those resources.

#### Your system subfolder

The [`snowfall-lib`]((https://snowfall.org/guides/lib/quickstart/) library linked in our `flake.nix` file expects to find to find relevant files in predictable, specifically-named folders. Inside the `systems` folder, `flake.nix` expects a folder named after the type of system architecture your new server is running on. Most servers are linux machines that run on x86 processors, so you can keep the `x86_64-linux` folder name provided in the repository you just cloned. (If you selected a different type of server architecture, however, you should update this folder name accordingly.)

- `systems`
	- **`x86_64-linux`**

#### Your default.nix file

Three folders deep, there is a file called `default.nix`.

- `systems`
	- `x86_64-linux` 
		- `boba-example`
			- **`default.nix`**

The `default.nix` file includes more specific configuration details of your new server, including:
- which programs will be running
- which network ports will be open
- how the server admin (`root`) and additional users can connect to the server

### Start making changes

#### Name your server

Inside the x86_64-linux folder, rename the "boba-example" folder to the name you want to give your new server. 

- `systems`
	- `x86_64-linux` 
		- `boba-example` > **`new-server-name`**

#### Edit flake.nix

Open your `flake.nix` file and replace the words "boba-example" with your server's name. There should be two instances of "boba-example" to replace.

#### Edit default.nix

##### Set up your root account

:::note
The "root" account is the user with the highest level of authority in a Linux server, often referred to as the "administrator" or "superuser." This guide will refer to the root user as the administrator.
:::

Replace the administrator's public key in the `flake.nix` file with the public key you used in the `YAML` cloud config [up here](#Creating-your-SSH-key-file).

```
users.users.root.openssh.authorizedKeys.keys = [" {the same public key you used for the cloud configuration} "];
```

##### Set up the first non-root user

:::danger
An administrator has the power to alter or overwrite fundamental building blocks of the server. It's good practice to use a non-administrator account for day-to-day configuration tasks, to reduce the risk of making irrevocable and unwanted changes by accident. 
:::

To create a standard user account, define initial login information for that user and add their public key. (If the account is for you, you can use the same public key as before, but if you want to give an account to a different person, you can use a different public key as long as it is one half of a public-private key pair.)

Find the following section of the `default.nix` file. Change all the parts that say `msboba` to whatever username you want for your first standard user. Then replace the sample public key with that user's public key. 

```
users.users.msboba = {
    isNormalUser = true;

    name = "msboba";

    home = "/home/msboba";
    group = "users";
  
    shell = pkgs.zsh;

    # wheel is needed for sudo
    extraGroups = [ "wheel" ];

    openssh.authorizedKeys.keys = [ 
      " {the new user's public key} "
    ];
  };
```

## Apply your updated config files to your NixOS server

Now that you've edited your local configuration files, it's almost time to use them on your NixOS server.

In this section, you will:
- Establish a connection to the NixOS server via ssh
- Retrieve two additional config files from the server itself and add them to your local config files
- Push all your local config files to your GitHub
- Point the NixOS server at the GitHub repository with the config files
- Rebuild your NixOS server according to those config files
- Test the new build of your NixOS server

### Connect to your NixOS server

Connect your NixOS server to your local machine (or to whichever machine has the administrator's private key) using the following steps:

- Copy your server's IP address from your Hetzner dashboard or whatever service you're using
- Use the terminal interface to navigate to your cloned copy of `selfhost-example`
- Enter the following command, where "#.###.##.##" is the IP address of your new server:

```
ssh root@#.###.##.##
```

- Confirm your connection to the NixOS server by entering the command `hostname`. It should return your server name.
- Confirm NixOS is installed by entering the command `nix`. It should return "no subcommand specified" and suggest a nix subcommand (rather than something like "command not found")

### Get config files from your new server

Use the `cat` command to request the contents of two files from the NixOS server, `hardware-configuration.nix` and `networking.nix`. They'll be added to our local collection of config files.

#### Get the hardware-configuration.nix file 

- Create a new file in your `new-server-name` folder called `hardware.nix`
- Enter the following command in your terminal: `cat /etc/nixos/hardware-configuration.nix`
- Copy the returned text into the new file
- Save the file

#### Get the networking.nix file

- Create a new file in your `new-server-name` folder called `networking.nix`
- Enter the following command in your terminal: `cat /etc/nixos/networking.nix`
- Copy the returned text into the new file
- Save the file

### Push your local config files to GitHub

With the hardware and networking config saved to the local repository we're working on, we're ready to add, commit, and push our changes to GitHub with the message.

- Open a new terminal window and make sure it is pointing at your local repository (rather than at your new NixOS server) using `hostname`.
- Confirm you are in your in your main branch using `git status`.
- Add, commit, and push your changes. 

```
git add .
git commit -m "initial system configuration"
git push
```

### Rebuild your server with the config files

Right now, your NixOS server config is nothing but that Cloud Config `YAML` you gave it before it launched. You'll rebuild its config using the new config files you just pushed.

#### Enable flakes

Use the environmental variable below to enable flakes in your new server (if they're not enabled already):

```
export NIX_CONFIG="experimental-features = nix-command flakes"
```

#### Trigger the rebuilding process

Edit the code below so that it points to your own repository instead of our sample repository: swap `github:bobaboard/selfhost-example#boba-example` for the equivalent path to your own new-server-name folder. For example, `github:yourgithubusername/selfhost-example#new-server-name`.

```
nixos-rebuild switch --no-write-lock-file --flake github:bobaboard/selfhost-example#boba-example --show-trace --option tarball-ttl 0 |& nix run nixpkgs#nix-output-monitor
```

If you've inputted the code correctly, the server will rebuild itself using the instructions provided by the configuration files you just pushed to GitHub. The speed of the build will vary depending on the CPU choice you made when you first [created the server](#creating-a-server)—it can take a long time on an underpowered machine.

### Test your new build

Since you're currently logged into your new server as the administrator, you can try switching to your non-administrator user account to test whether or not it was successfully created.

For example:

```
su standard_username
```

You should receive a message that starts like this:

```
This is the Z Shell configuration function for new users, zsh-newuser-install.
You are seeing this message because...
```

Press q to quit the menu and keep working with the server. You can do the new user setup later! 

## Working in the server

### Connect to `tailscale`

:::note
If you don't already have a `tailscale` account, you can quickly set one up [here](https://tailscale.com/pricing) for free. Tailscale allows you to do useful things like:
- easily access your new server remotesly
- edit your server configuration files directly on the server using VSCode
:::

Connect your tailscale account to your new server with the followiing command:
```
sudo tailscale login
```

When asked for your password, hit "enter" to get an authentication link. Follow the link and authenticate in your browser window.

### Clone your configuration 

```
mkdir programs /*Make a new directory (folder) called "programs".*/
cd programs /*Change directories: move to the new folder you just made.*/

```

- We're going to do further work on the configuration directly from the server.
- Clone the configuration from GitHub (several ways you could do this, the stream has us setting up GitHub command line access, adding a new SSH key from this machine, etc)
- `cd` into the directory containing the configuration
- If you want to work in VSCode, you can take advantage of the fact that you've set up `tailscale`. You'll need the VSCode Tailscale extension, where you'll set the ssh username and machine address to access the remote host.

